const Checkout = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-white">
      <div className="relative mx-auto max-w-dvw">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-neutral-200 lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-5 py-12 md:px-10 flex flex-row gap-10">
            <div>
              <button className="mb-6 inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                <span>Go Back</span> <span className="text-neutral-400">{'>'}</span>
              </button>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-extrabold text-neutral-800">Contact</h2>
                <div className="space-y-3">
                  <input
                    placeholder="Email"
                    className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none focus:border-neutral-700"
                  />
                  <label className="flex items-center gap-2 text-sm text-neutral-700">
                    <input type="checkbox" className="h-4 w-4" />
                    Email me with news and offers
                  </label>
                </div>

                <h2 className="mt-8 mb-3 text-2xl font-extrabold text-neutral-800">Delivery</h2>
                <div className="space-y-3">
                  <select className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none focus:border-neutral-700">
                    <option>Philippines</option>
                  </select>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <input placeholder="First Name" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                    <input placeholder="Last Name" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  </div>
                  <input placeholder="Address" className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  <input placeholder="Apartment/Unit No. (Optional)" className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr,200px]">
                    <input placeholder="City" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                    <input placeholder="Postal Code" className="rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  </div>
                  <select className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none">
                    <option>National Capital Region</option>
                  </select>
                  <input placeholder="Phone Number" className="w-full rounded-md border border-neutral-300 px-3 py-3 outline-none" />
                  <label className="mt-1 flex items-center gap-2 text-sm text-neutral-700">
                    <input type="checkbox" className="h-4 w-4" />
                    Save this information for next time.
                  </label>
                </div>

                <div className="mt-6 rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-center text-sm text-neutral-700">
                  Enter your shipping address to view available shipping methods.
                </div>

                <h2 className="mt-10 mb-2 text-2xl font-extrabold text-neutral-800">Payment</h2>
                <p className="mb-3 text-sm text-neutral-600">All transactions are secure and encrypted.</p>
                <div className="overflow-hidden rounded-md border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-700">
                  Secure Payments via PayMongo
                </div>
            </div>
          </div>

          {/* RIGHT: summary */}
          <aside className="bg-[#f2f3e7] px-5 py-12 md:px-8 lg:sticky lg:top-0 lg:h-screen w-full">
            <div className="mb-6 flex items-start gap-3">
              <img
                src="https://via.placeholder.com/60x80"
                alt="Product"
                className="h-16 w-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">Sunset Orchid Bikini Top</p>
                    <p className="text-sm text-neutral-600">Small</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-800">₱1299</p>
                </div>
              </div>
            </div>

            <div className="mb-6 flex gap-2">
              <input
                placeholder="Discount Code or Gift Card"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-neutral-700"
              />
              <button className="rounded-md bg-[#6a6f3a] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                Apply
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between text-neutral-700">
                <span>Subtotal</span>
                <span>₱1299</span>
              </div>
              <div className="flex items-center justify-between text-neutral-700">
                <span>Shipping</span>
                <span className="text-neutral-500">Enter Shipping Address</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-base font-semibold text-neutral-700">Total</span>
              <span className="text-2xl font-extrabold text-neutral-800">₱1299</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
