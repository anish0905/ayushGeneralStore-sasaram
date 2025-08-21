'use client';
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  const featuredProducts = [
    { id: 1, name: "आटा (Wheat Flour)", price: "₹45", image: "🌾", category: "Grains", quantity: "1kg", weight: 1000 },
    { id: 2, name: "चावल (Rice)", price: "₹65", image: "🍚", category: "Grains", quantity: "1kg", weight: 1000 },
    { id: 3, name: "घी (Ghee)", price: "₹180", image: "🫗", category: "Oils", quantity: "500ml", weight: 500 },
    { id: 4, name: "मैगी (Maggi)", price: "₹14", image: "🍜", category: "Instant Foods", quantity: "1 packet", weight: 70 },
    { id: 5, name: "चाय पत्ती (Tea)", price: "₹85", image: "🫖", category: "Beverages", quantity: "250gm", weight: 250 },
    { id: 6, name: "शैम्पू (Shampoo)", price: "₹95", image: "🧴", category: "Personal Care", quantity: "200ml", weight: 200 },
    { id: 7, name: "दाल (Lentils)", price: "₹85", image: "🫘", category: "Lentils", quantity: "1kg", weight: 1000 },
    { id: 8, name: "साबुन (Soap)", price: "₹25", image: "🧼", category: "Personal Care", quantity: "1 piece", weight: 75 }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} (${product.quantity}) added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/hero-bg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
            Welcome to Ayush General Store
          </h1>
          <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto">
            Your one-stop destination for all daily essentials. Quality products, competitive prices, and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
              Shop Now
            </Link>
            <Link href="/about" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Products</h3>
              <p className="text-gray-600">We offer only the best quality products from trusted brands.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive prices that won&apos;t break your budget.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Friendly Service</h3>
              <p className="text-gray-600">Our staff is always ready to help you find what you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Our most popular items that customers love</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{product.image}</div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                  {product.category}
                </span>
                <p className="text-blue-600 text-xs mb-3 text-center font-medium">
                  {product.quantity}
                </p>
                <div className="text-lg font-bold text-green-600 mb-3">
                  {product.price}
                </div>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Grains', icon: '🌾', color: 'bg-orange-500', description: 'आटा, चावल, गेहूं' },
              { name: 'Spices', icon: '🌶️', color: 'bg-red-500', description: 'मसाले और मिर्च' },
              { name: 'Lentils', icon: '🫘', color: 'bg-yellow-500', description: 'दाल और राजमा' },
              { name: 'Personal Care', icon: '🧴', color: 'bg-blue-500', description: 'शैम्पू और साबुन' },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center cursor-pointer border border-gray-100">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Shop?</h2>
          <p className="text-xl text-green-100 mb-8">Visit our store today and discover amazing deals on quality products!</p>
          <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
