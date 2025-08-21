'use client';
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const products = [
    // Grains & Flours
    { id: 1, name: "आटा (Wheat Flour)", category: "Grains", price: "₹45", image: "🌾", description: "Fresh whole wheat flour for rotis", quantity: "1kg", weight: 1000 },
    { id: 2, name: "चावल (Rice)", category: "Grains", price: "₹65", image: "🍚", description: "Premium quality basmati rice", quantity: "1kg", weight: 1000 },
    { id: 3, name: "गेहूं (Wheat)", category: "Grains", price: "₹35", image: "🌾", description: "Whole wheat grains", quantity: "1kg", weight: 1000 },
    { id: 4, name: "बेसन (Gram Flour)", category: "Grains", price: "₹55", image: "🫘", description: "Fine gram flour for pakoras", quantity: "500gm", weight: 500 },
    { id: 5, name: "सूजी (Rava/Semolina)", category: "Grains", price: "₹40", image: "🫘", description: "Semolina for upma and halwa", quantity: "500gm", weight: 500 },
    
    // Oils & Ghee
    { id: 6, name: "तेल (Oil)", category: "Oils", price: "₹120", image: "🫗", description: "Pure cooking oil", quantity: "1L", weight: 1000 },
    { id: 7, name: "घी (Ghee)", category: "Oils", price: "₹180", image: "🫗", description: "Pure desi ghee", quantity: "500ml", weight: 500 },
    
    // Instant Foods
    { id: 8, name: "मैगी (Maggi)", category: "Instant Foods", price: "₹14", image: "🍜", description: "2-minute instant noodles", quantity: "1 packet", weight: 70 },
    { id: 9, name: "चिप्स (Chips)", category: "Snacks", price: "₹20", image: "🥔", description: "Crispy potato chips", quantity: "1 packet", weight: 30 },
    { id: 10, name: "कुरकुरे (Kurkure)", category: "Snacks", price: "₹10", image: "🌽", description: "Spicy corn snacks", quantity: "1 packet", weight: 25 },
    { id: 11, name: "नमकीन (Snacks)", category: "Snacks", price: "₹25", image: "🥨", description: "Traditional Indian snacks", quantity: "100gm", weight: 100 },
    { id: 12, name: "बिस्किट (Biscuits)", category: "Snacks", price: "₹30", image: "🍪", description: "Sweet biscuits", quantity: "1 packet", weight: 150 },
    { id: 13, name: "टोस्ट (Rusk)", category: "Snacks", price: "₹35", image: "🍞", description: "Crispy rusk toast", quantity: "1 packet", weight: 200 },
    
    // Spices
    { id: 14, name: "जीरा (Cumin)", category: "Spices", price: "₹85", image: "🌱", description: "Whole cumin seeds", quantity: "100gm", weight: 100 },
    { id: 15, name: "मिर्च (Chili)", category: "Spices", price: "₹75", image: "🌶️", description: "Red chili powder", quantity: "100gm", weight: 100 },
    { id: 16, name: "हल्दी (Turmeric)", category: "Spices", price: "₹65", image: "🟡", description: "Pure turmeric powder", quantity: "100gm", weight: 100 },
    { id: 17, name: "धनिया पाउडर (Coriander Powder)", category: "Spices", price: "₹70", image: "🌿", description: "Ground coriander powder", quantity: "100gm", weight: 100 },
    { id: 18, name: "गरम मसाला (Garam Masala)", category: "Spices", price: "₹90", image: "🌶️", description: "Aromatic garam masala", quantity: "50gm", weight: 50 },
    { id: 19, name: "सरसों दाना (Mustard Seeds)", category: "Spices", price: "₹60", image: "🟡", description: "Black mustard seeds", quantity: "100gm", weight: 100 },
    { id: 20, name: "इलायची (Cardamom)", category: "Spices", price: "₹150", image: "🟢", description: "Green cardamom pods", quantity: "50gm", weight: 50 },
    { id: 21, name: "दालचीनी (Cinnamon)", category: "Spices", price: "₹120", image: "🟤", description: "Cinnamon sticks", quantity: "50gm", weight: 50 },
    { id: 22, name: "लौंग (Cloves)", category: "Spices", price: "₹110", image: "🟤", description: "Whole cloves", quantity: "50gm", weight: 50 },
    { id: 23, name: "अजवाइन (Carom Seeds)", category: "Spices", price: "₹80", image: "🌱", description: "Carom seeds for digestion", quantity: "100gm", weight: 100 },
    { id: 24, name: "हींग (Asafoetida)", category: "Spices", price: "₹95", image: "🟡", description: "Asafoetida powder", quantity: "50gm", weight: 50 },
    { id: 25, name: "मेथी दाना (Fenugreek Seeds)", category: "Spices", price: "₹70", image: "🟡", description: "Fenugreek seeds", quantity: "100gm", weight: 100 },
    
    // Lentils & Pulses
    { id: 26, name: "दाल (Lentils)", category: "Lentils", price: "₹85", image: "🫘", description: "Mixed lentils pack", quantity: "1kg", weight: 1000 },
    { id: 27, name: "मटर दाल (Peas Dal)", category: "Lentils", price: "₹75", image: "🫘", description: "Yellow peas dal", quantity: "1kg", weight: 1000 },
    { id: 28, name: "मसूर दाल (Masoor Dal)", category: "Lentils", price: "₹80", image: "🫘", description: "Red masoor dal", quantity: "1kg", weight: 1000 },
    { id: 29, name: "अरहर दाल (Toor Dal)", category: "Lentils", price: "₹90", image: "🫘", description: "Toor dal", quantity: "1kg", weight: 1000 },
    { id: 30, name: "मूंग दाल (Moong Dal)", category: "Lentils", price: "₹85", image: "🫘", description: "Green moong dal", quantity: "1kg", weight: 1000 },
    { id: 31, name: "चना दाल (Chana Dal)", category: "Lentils", price: "₹80", image: "🫘", description: "Bengal gram dal", quantity: "1kg", weight: 1000 },
    { id: 32, name: "राजमा (Kidney Beans)", category: "Lentils", price: "₹95", image: "🫘", description: "Red kidney beans", quantity: "500gm", weight: 500 },
    { id: 33, name: "छोले (Chickpeas)", category: "Lentils", price: "₹85", image: "🫘", description: "White chickpeas", quantity: "500gm", weight: 500 },
    
    // Other Grains
    { id: 34, name: "साबूदाना (Sago)", category: "Grains", price: "₹60", image: "⚪", description: "Pearl sago for kheer", quantity: "500gm", weight: 500 },
    { id: 35, name: "पोहा (Flattened Rice)", category: "Grains", price: "₹45", image: "🍚", description: "Flattened rice for poha", quantity: "500gm", weight: 500 },
    { id: 36, name: "मुरमुरा (Puffed Rice)", category: "Grains", price: "₹40", image: "🍚", description: "Puffed rice for bhel", quantity: "500gm", weight: 500 },
    
    // Essentials
    { id: 37, name: "चीनी (Sugar)", category: "Essentials", price: "₹50", image: "🍯", description: "Refined white sugar", quantity: "1kg", weight: 1000 },
    { id: 38, name: "नमक (Salt)", category: "Essentials", price: "₹20", image: "🧂", description: "Iodized table salt", quantity: "1kg", weight: 1000 },
    { id: 39, name: "चाय पत्ती (Tea)", category: "Beverages", price: "₹85", image: "🫖", description: "Premium tea leaves", quantity: "250gm", weight: 250 },
    { id: 40, name: "कॉफी (Coffee)", category: "Beverages", price: "₹120", image: "☕", description: "Instant coffee powder", quantity: "100gm", weight: 100 },
    { id: 41, name: "दूध पाउडर (Milk Powder)", category: "Dairy", price: "₹180", image: "🥛", description: "Full cream milk powder", quantity: "500gm", weight: 500 },
    
    // Condiments
    { id: 42, name: "पापड़ (Papad)", category: "Condiments", price: "₹35", image: "🫓", description: "Crispy papad", quantity: "1 packet", weight: 100 },
    { id: 43, name: "अचार (Pickle)", category: "Condiments", price: "₹65", image: "🥒", description: "Spicy mango pickle", quantity: "500gm", weight: 500 },
    { id: 44, name: "टमाटर सॉस (Tomato Sauce)", category: "Condiments", price: "₹45", image: "🍅", description: "Tomato ketchup", quantity: "500ml", weight: 500 },
    { id: 45, name: "सिरका (Vinegar)", category: "Condiments", price: "₹55", image: "🫗", description: "White vinegar", quantity: "500ml", weight: 500 },
    { id: 46, name: "सोया सॉस (Soy Sauce)", category: "Condiments", price: "₹75", image: "🫗", description: "Soy sauce", quantity: "500ml", weight: 500 },
    
    // Personal Care
    { id: 47, name: "शैम्पू (Shampoo)", category: "Personal Care", price: "₹95", image: "🧴", description: "Hair shampoo", quantity: "200ml", weight: 200 },
    { id: 48, name: "साबुन (Soap)", category: "Personal Care", price: "₹25", image: "🧼", description: "Bathing soap", quantity: "1 piece", weight: 75 },
    { id: 49, name: "टूथपेस्ट (Toothpaste)", category: "Personal Care", price: "₹45", image: "🦷", description: "Toothpaste", quantity: "100gm", weight: 100 },
    { id: 50, name: "ब्रश (Toothbrush)", category: "Personal Care", price: "₹35", image: "🪥", description: "Toothbrush", quantity: "1 piece", weight: 20 },
    { id: 51, name: "बॉडी लोशन (Body Lotion)", category: "Personal Care", price: "₹85", image: "🧴", description: "Body lotion", quantity: "200ml", weight: 200 },
    { id: 52, name: "हेयर ऑयल (Hair Oil)", category: "Personal Care", price: "₹75", image: "🫗", description: "Hair oil", quantity: "100ml", weight: 100 },
    
    // Household
    { id: 53, name: "डिटर्जेंट पाउडर (Detergent)", category: "Household", price: "₹120", image: "🧴", description: "Washing powder", quantity: "1kg", weight: 1000 },
    { id: 54, name: "ब्लीच (Bleach)", category: "Household", price: "₹65", image: "🧴", description: "Fabric bleach", quantity: "500ml", weight: 500 },
    { id: 55, name: "फिनाइल (Phenyl)", category: "Household", price: "₹45", image: "🧴", description: "Floor cleaner", quantity: "500ml", weight: 500 },
    { id: 56, name: "हार्पिक (Harpic)", category: "Household", price: "₹85", image: "🧴", description: "Toilet cleaner", quantity: "500ml", weight: 500 },
    
    // Others
    { id: 57, name: "अगरबत्ती (Incense Sticks)", category: "Others", price: "₹25", image: "🕯️", description: "Incense sticks", quantity: "1 packet", weight: 50 },
    { id: 58, name: "मोमबत्ती (Candles)", category: "Others", price: "₹30", image: "🕯️", description: "Candles", quantity: "1 packet", weight: 100 },
    { id: 59, name: "माचिस (Matchbox)", category: "Others", price: "₹5", image: "🔥", description: "Matchbox", quantity: "1 box", weight: 10 },
    { id: 60, name: "पानी (Water)", category: "Beverages", price: "₹20", image: "💧", description: "Mineral water bottle", quantity: "1L", weight: 1000 }
  ];

  const categories = ["All", "Grains", "Oils", "Instant Foods", "Snacks", "Spices", "Lentils", "Essentials", "Beverages", "Dairy", "Condiments", "Personal Care", "Household", "Others"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} (${product.quantity}) added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">हमारे उत्पाद</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our wide range of quality products for all your daily needs
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {selectedCategory === "All" ? "सभी उत्पाद" : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 text-center">
                    {product.description}
                  </p>
                  <p className="text-blue-600 text-sm mb-3 text-center font-medium">
                    {product.quantity}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">विशेष ऑफर</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Fresh Produce Sale</h3>
              <p className="text-orange-100 mb-4">Get 20% off on all fresh vegetables and fruits this week!</p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300">
                Shop Now
              </button>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Household Essentials</h3>
              <p className="text-blue-100 mb-4">Buy 2 get 1 free on all household cleaning products!</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
