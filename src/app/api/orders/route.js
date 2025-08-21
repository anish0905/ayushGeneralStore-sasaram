import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(request) {
  try {
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('MongoDB connected successfully');
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { customerName, customerPhone, customerAddress, items, totalAmount } = body;

    // Validate required fields
    if (!customerName || !customerPhone || !customerAddress || !items || !totalAmount) {
      console.log('Missing required fields:', { customerName, customerPhone, customerAddress, items, totalAmount });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Creating new order...');
    // Create new order
    const order = new Order({
      customerName,
      customerPhone,
      customerAddress,
      items,
      totalAmount
    });

    console.log('Saving order to database...');
    await order.save();
    console.log('Order saved successfully:', order.orderNumber);

    return NextResponse.json(
      { 
        message: 'Order placed successfully!',
        orderNumber: order.orderNumber,
        orderId: order._id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating order:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { error: 'Failed to create order', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    
    // Get query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    // Build filter object
    let filter = {};
    
    if (status && status !== 'all') {
      filter.status = status;
    }
    
    if (search) {
      filter.$or = [
        { customerName: { $regex: search, $options: 'i' } },
        { customerPhone: { $regex: search, $options: 'i' } },
        { orderNumber: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate + 'T23:59:59.999Z')
      };
    }
    
    // Get orders from MongoDB with sorting by latest first
    const orders = await Order.find(filter).sort({ createdAt: -1 });
    return NextResponse.json(orders);

  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
