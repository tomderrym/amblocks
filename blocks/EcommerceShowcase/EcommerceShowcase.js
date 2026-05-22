import { useState } from "react";
import { ShoppingBag, Search, Heart, User, ChevronLeft, Star, Menu, Plus, Minus, Home, Grid, X } from "lucide-react";
const PhoneFrame = ({ children }) => <div className="w-[320px] h-[640px] bg-white dark:bg-[#121212] rounded-[40px] border-[12px] border-black shadow-2xl overflow-hidden relative flex flex-col shrink-0">
    {children}
  </div>;
const PRODUCTS = [
  { id: 1, name: "Aesop Hand Balm", price: 31, category: "Skincare", image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=400&h=500", rating: 4.9, bg: "bg-[#F2EDE4]" },
  { id: 2, name: "Minimalist Chair", price: 299, category: "Furniture", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400&h=500", rating: 4.8, bg: "bg-[#E5E9E4]" },
  { id: 3, name: "Ceramic Vase", price: 45, category: "Decor", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=400&h=500", rating: 4.6, bg: "bg-[#F0EEEA]" },
  { id: 4, name: "Table Lamp", price: 89, category: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400&h=500", rating: 4.7, bg: "bg-[#EFEFEF]" }
];
function EcommerceShowcase() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    setCart([...cart, { ...selectedProduct, quantity }]);
    setSelectedProduct(null);
    setQuantity(1);
    setActiveTab("cart");
  };
  const renderHome = () => <div className="flex-1 overflow-y-auto scrollbar-hide bg-white dark:bg-[#121212] pb-24">
      {
    /* Header */
  }
      <div className="px-6 py-5 flex justify-between items-center sticky top-0 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md z-10 transition-all">
        <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          <div className="relative cursor-pointer" onClick={() => setActiveTab("cart")}>
            <ShoppingBag className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>}
          </div>
        </div>
      </div>

      {
    /* Hero Banner */
  }
      <div className="px-6 mb-8 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        <h1 className="text-3xl font-serif text-gray-900 dark:text-white leading-tight mb-2">
          New<br />Collection
        </h1>
        <p className="text-sm text-gray-500 mb-4 font-light tracking-wide">Spring/Summer 2026</p>
        <button className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2 hover:opacity-80 transition-opacity">
          Explore
        </button>
      </div>

      {
    /* Categories */
  }
      <div className="flex px-6 gap-6 mb-8 overflow-x-auto scrollbar-hide pb-2 animate-in fade-in slide-in-from-right-8 duration-500 delay-200">
        {["All", "Furniture", "Decor", "Skincare", "Lighting"].map((cat, i) => <div key={i} className={`text-sm shrink-0 font-medium cursor-pointer transition-colors ${i === 0 ? "text-black border-b-2 border-black dark:text-white dark:border-white pb-1" : "text-gray-400 hover:text-gray-600"}`}>
            {cat}
          </div>)}
      </div>

      {
    /* Products Grid */
  }
      <div className="grid grid-cols-2 gap-4 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
        {PRODUCTS.map((product) => <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
            <div className={`w-full aspect-[4/5] ${product.bg} rounded-2xl mb-3 overflow-hidden relative shadow-sm`}>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-105" />
              <button className="absolute top-3 right-3 w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4 text-black" />
              </button>
            </div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{product.name}</h3>
            <p className="text-sm font-semibold text-gray-500 mt-1">${product.price}</p>
          </div>)}
      </div>
    </div>;
  const renderProductDetails = () => <div className="absolute inset-0 bg-white dark:bg-[#121212] z-40 flex flex-col animate-in slide-in-from-bottom-full duration-500">
      <div className={`relative w-full h-[55%] ${selectedProduct.bg}`}>
        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" />
        
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 pt-10">
          <button onClick={() => setSelectedProduct(null)} className="w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm">
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button className="w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm">
            <Heart className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-[#121212] -mt-6 rounded-t-3xl relative z-20 px-6 py-8 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-1">{selectedProduct.name}</h2>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{selectedProduct.rating}</span>
            </div>
          </div>
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">${selectedProduct.price}</span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light mb-auto">
          Minimalist and elegant design that fits perfectly in any modern environment. Crafted with premium materials for longevity and comfort.
        </p>

        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-3">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-semibold text-sm w-4 text-center dark:text-white">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <button
    onClick={addToCart}
    className="flex-1 bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-xl shadow-black/10 dark:shadow-white/10"
  >
            Add to Bag
          </button>
        </div>
      </div>
    </div>;
  const renderCart = () => <div className="flex-1 flex flex-col bg-white dark:bg-[#121212] pb-20 animate-in fade-in duration-300">
      <div className="px-6 py-5 flex items-center gap-4 sticky top-0 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md z-10 pt-10">
        <h1 className="text-2xl font-serif text-gray-900 dark:text-white">Shopping Bag</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4">
        {cart.length === 0 ? <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
            <ShoppingBag className="w-12 h-12 opacity-20" />
            <p className="font-light">Your bag is empty</p>
            <button
    onClick={() => setActiveTab("home")}
    className="px-6 py-2 border border-gray-200 dark:border-gray-800 rounded-full text-sm mt-4 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
  >
              Start Shopping
            </button>
          </div> : <div className="space-y-6">
            {cart.map((item, i) => <div key={i} className="flex gap-4 animate-in slide-in-from-right-8 duration-500" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>
                <div className={`w-20 h-24 rounded-xl ${item.bg} overflow-hidden shrink-0`}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" />
                </div>
                <div className="flex-1 py-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white">{item.name}</h3>
                    <button onClick={() => setCart(cart.filter((_, idx) => idx !== i))} className="text-gray-400 hover:text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-auto">{item.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold text-gray-900 dark:text-white">${item.price * item.quantity}</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">Qty: {item.quantity}</span>
                  </div>
                </div>
              </div>)}
          </div>}
      </div>

      {cart.length > 0 && <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#121212] pt-4 mb-4">
          <div className="flex justify-between text-sm mb-4">
            <span className="text-gray-500">Total</span>
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            </span>
          </div>
          <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-black/10 dark:shadow-white/10">
            Checkout
          </button>
        </div>}
    </div>;
  return <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] font-sans flex flex-col">
      {selectedProduct ? renderProductDetails() : activeTab === "home" ? renderHome() : renderCart()}

      {
    /* Bottom Tab Bar */
  }
      {!selectedProduct && <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/90 dark:bg-white/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-8 z-30 shadow-2xl animate-in slide-in-from-bottom-12 duration-700 delay-500 fill-mode-both">
          <button
    onClick={() => setActiveTab("home")}
    className={`transition-colors ${activeTab === "home" ? "text-white dark:text-black scale-110" : "text-gray-500 dark:text-gray-400 hover:text-gray-300"}`}
  >
            <Home className="w-5 h-5" />
          </button>
          <button
    onClick={() => setActiveTab("categories")}
    className={`transition-colors ${activeTab === "categories" ? "text-white dark:text-black scale-110" : "text-gray-500 dark:text-gray-400 hover:text-gray-300"}`}
  >
            <Grid className="w-5 h-5" />
          </button>
          <button
    onClick={() => setActiveTab("cart")}
    className={`relative transition-colors ${activeTab === "cart" ? "text-white dark:text-black scale-110" : "text-gray-500 dark:text-gray-400 hover:text-gray-300"}`}
  >
            <ShoppingBag className="w-5 h-5" />
            {cart.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-black">
                {cart.length}
              </span>}
          </button>
          <button
    onClick={() => setActiveTab("profile")}
    className={`transition-colors ${activeTab === "profile" ? "text-white dark:text-black scale-110" : "text-gray-500 dark:text-gray-400 hover:text-gray-300"}`}
  >
            <User className="w-5 h-5" />
          </button>
        </div>}
    </div>;
}
export {
  EcommerceShowcase as default
};
