import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Serving our community with quality products and exceptional service since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ayush General Store was founded in 2010 with a simple mission: to provide our community with quality products at affordable prices.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve thousands of satisfied customers and continue to grow our business while maintaining the personal touch that makes us special.
              </p>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">A</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Ayush General Store</h3>
                  <p className="text-green-600 font-semibold">Established 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600 text-center">
                We never compromise on quality. Every product in our store meets our high standards.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600 text-center">
                We're proud to be part of our local community and support local businesses.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600 text-center">
                We continuously improve our services to better serve our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
