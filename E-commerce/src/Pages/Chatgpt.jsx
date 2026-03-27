import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-6 grid grid-cols-12 gap-6">

        {/* Navbar */}
        <div className="col-span-12 flex items-center justify-between">
          <h1 className="text-xl font-bold">Nitec.</h1>

          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">🔔</div>
            <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center">❤</div>
            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">Ryman Alex</span>
            </div>
          </div>
        </div>

        {/* Left Main Section */}
        <div className="col-span-8 bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
          <p className="text-sm text-gray-400">Music is Classic</p>
          <h2 className="text-4xl font-bold mt-2 leading-tight">
            Sequoia Inspiring Musico.
          </h2>

          <div className="mt-6">
            <p className="text-gray-600 font-medium">Clear Sounds</p>
            <p className="text-sm text-gray-400 max-w-sm">
              Making your dream music come true stay with Sequoia Sounds
            </p>
          </div>

          <button className="mt-6 bg-lime-400 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
            View All Products →
          </button>

          {/* Headphone Image */}
          <img
            src="https://g.sdlcdn.com/imgs/k/w/k/OLIVEOPS-P9-Black-Headphones-Bluetooth-SDL667028692-1-d56ed.jpeg?trim=10&w=544&h=640&sharp=7"
            alt="headphone"
            className="absolute right-10 top-10 w-80 drop-shadow-2xl"
          />
        </div>

        {/* Right Section */}
        <div className="col-span-4 flex flex-col gap-4">

          {/* Colors */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h3 className="font-semibold">Popular Colors</h3>
            <div className="flex gap-3 mt-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full" />
              <div className="w-6 h-6 bg-orange-400 rounded-full" />
              <div className="w-6 h-6 bg-green-500 rounded-full" />
              <div className="w-6 h-6 bg-red-500 rounded-full" />
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
          </div>

          {/* Earbuds */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h3 className="font-semibold">New Gen X-Bud</h3>
            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80"
              className="rounded-xl mt-3 w-full h-40 object-cover"
            />
          </div>

          {/* VR Headphone */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <img
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
              className="rounded-xl w-full h-40 object-cover"
            />
            <p className="mt-2 font-semibold">Light Grey Surface Headphone</p>
            <p className="text-sm text-gray-400">Boosted with bass</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="col-span-12 grid grid-cols-4 gap-4">

          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=200&q=80"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p className="font-semibold text-sm">More Products</p>
              <p className="text-xs text-gray-400">460+ items</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">5M+ Downloads</p>
              <p className="text-xs text-gray-400">4.6 Reviews</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1518441902112-0f5a9b1e7d66?auto=format&fit=crop&w=200&q=80"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p className="font-semibold text-sm">Popular</p>
              <p className="text-xs text-gray-400">Listening Has Been Released</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p className="font-semibold text-sm">New Release</p>
              <p className="text-xs text-gray-400">Check latest items</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
