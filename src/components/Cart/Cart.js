'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getTotalAmount, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: customerDetails.name,
          customerPhone: customerDetails.phone,
          customerAddress: customerDetails.address,
          items: items,
          totalAmount: getTotalAmount()
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Order placed successfully! Order Number: ${data.orderNumber}`);
        clearCart();
        setShowCheckout(false);
        setCustomerDetails({ name: '', phone: '', address: '' });
        onClose();
      } else {
        alert('Failed to place order: ' + data.error);
      }
    } catch (error) {
      alert('Error placing order: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🛒</div>
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : showCheckout ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="3"
                    placeholder="Enter your complete address"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    Back to Cart
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Placing Order...' : 'Place Order'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                    <div className="text-2xl">{item.image}</div>
                                         <div className="flex-1">
                       <h4 className="font-medium text-gray-800">{item.name}</h4>
                       <p className="text-sm text-gray-600">{item.category}</p>
                       <p className="text-blue-600 text-xs font-medium">{item.quantity}</p>
                       <p className="text-green-600 font-semibold">{item.price}</p>
                     </div>
                    <div className="flex items-center gap-2">
                      <button
                                                 onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                        className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700"
                      >
                        -
                      </button>
                                             <span className="w-8 text-center text-black">{item.cartQuantity}</span>
                      <button
                                                 onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                        className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-black">Total:</span>
                  <span className="text-xl font-bold text-green-600">₹{getTotalAmount()}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={clearCart}
                    className="flex-1 px-4 py-2 border border-gray-900 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="flex-1 px-4 py-2 bg-green-600 text-black rounded-md hover:bg-green-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
