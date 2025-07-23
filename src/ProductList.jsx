import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600&auto=format&fit=crop&q=60",
    price: "$99.99",
    description: "Noise-cancelling wireless headphones with immersive sound."
  },
  {
    id: 2,
    name: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
    price: "$699.99",
    description: "Flagship smartphone with exceptional display and camera."
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop&q=60",
    price: "$49.99",
    description: "Precision-engineered mouse with customizable buttons."
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?w=600&auto=format&fit=crop&q=60",
    price: "$89.99",
    description: "Durable keyboard with mechanical switches and RGB lighting."
  },
  {
    id: 5,
    name: "Smartwatch",
    image: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=600&auto=format&fit=crop&q=60",
    price: "$199.99",
    description: "Fitness tracking and notifications on your wrist."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1582978571763-2d039e56f0c3?w=600&auto=format&fit=crop&q=60",
    price: "$59.99",
    description: "Portable speaker with deep bass and crisp audio."
  }
];

export default function ProductList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100">
      {/* Amazon-style navbar */}
      <header className="bg-[#232F3E] text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">AmazonTech</h1>
        <input
          type="text"
          placeholder="Search products"
          className="w-1/2 px-4 py-2 rounded text-black"
        />
        <div className="text-sm">Cart (0)</div>
      </header>

      {/* Product grid */}
      <main className="py-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col transform hover:scale-105 duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="px-4 py-3 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                  <div className="text-green-600 text-lg font-bold mb-4">{product.price}</div>
                  <div className="flex gap-2 justify-center">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition font-semibold">
                      Add to Cart
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition font-semibold">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-gray-600 py-4 mt-10 border-t">
        &copy; {new Date().getFullYear()} AmazonTech. All rights reserved.
      </footer>
    </div>
  );
}
