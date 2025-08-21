import { NextResponse } from 'next/server';
import { ordersStorage } from '@/lib/ordersStorage';

export async function POST(request) {
  try {
    const body = await request.json();
    const { customerName, customerPhone, customerAddress, items, totalAmount } = body;

    // Validate required fields
    if (!customerName || !customerPhone || !customerAddress || !items || !totalAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new order using shared storage
    const order = ordersStorage.addOrder({
      customerName,
      customerPhone,
      customerAddress,
      items,
      totalAmount
    });

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

export async function GET() {
  try {
    // Get orders from shared storage
    const orders = ordersStorage.getOrders();
    return NextResponse.json(orders);

  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
