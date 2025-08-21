// Shared in-memory storage for orders
let orders = [];
let orderCounter = 1;

export const ordersStorage = {
  // Add a new order
  addOrder: (orderData) => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const orderNumber = `ORD${year}${month}${day}${random}`;

    const order = {
      _id: `order_${orderCounter++}`,
      ...orderData,
      orderNumber,
      orderDate: date,
      status: 'pending',
      createdAt: date,
      updatedAt: date
    };

    orders.unshift(order); // Add to beginning of array
    return order;
  },

  // Get all orders
  getOrders: () => {
    return orders.slice(0, 50); // Return latest 50 orders
  },

  // Update order status
  updateOrderStatus: (orderId, status) => {
    const orderIndex = orders.findIndex(order => order._id === orderId);
    
    if (orderIndex === -1) {
      return null;
    }

    orders[orderIndex] = {
      ...orders[orderIndex],
      status,
      updatedAt: new Date()
    };

    return orders[orderIndex];
  },

  // Get order by ID
  getOrderById: (orderId) => {
    return orders.find(order => order._id === orderId);
  }
};
