import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { customerName, customerPhone, customerAddress, items, totalAmount } = body;

    console.log('Received order data:', { customerName, customerPhone, customerAddress, items, totalAmount });

    // Validate required fields
    if (!customerName || !customerPhone || !customerAddress || !items || !totalAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Transform items to match schema
    const transformedItems = items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      cartQuantity: parseInt(item.cartQuantity) || 1
    }));

    console.log('Transformed items:', transformedItems);

    // Create new order
    const order = new Order({
      customerName,
      customerPhone,
      customerAddress,
      items: transformedItems,
      totalAmount
    });

    await order.save();

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
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    // Build filter object
    let filter = {};
    
    if (status && status !== 'all') {
      filter.status = status;
    }
    
    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate + 'T23:59:59.999Z')
      };
    } else if (startDate) {
      filter.createdAt = {
        $gte: new Date(startDate)
      };
    } else if (endDate) {
      filter.createdAt = {
        $lte: new Date(endDate + 'T23:59:59.999Z')
      };
    }

    // Get orders with filters
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
