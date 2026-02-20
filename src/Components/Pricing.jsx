const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div className="border rounded-2xl p-8 hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">Starter</h3>
          <p className="text-4xl font-bold my-4">$29</p>
          <p className="text-gray-600 text-sm">
            Ideal for individual developers
          </p>
          <button className="mt-6 w-full bg-blue-600 text-black py-3 rounded-full">
            Choose Plan
          </button>
        </div>
        <div className="border rounded-2xl p-8 hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">Advance</h3>
          <p className="text-4xl font-bold my-4">$50</p>
          <p className="text-gray-600 text-sm">
            Ideal for individual developers
          </p>
          <button className="mt-6 w-full bg-blue-600 text-black py-3 rounded-full">
            Choose Plan
          </button>
        </div>
        <div className="border rounded-2xl p-8 hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">Premium</h3>
          <p className="text-4xl font-bold my-4">$100</p>
          <p className="text-gray-600 text-sm">
            Ideal for individual developers
          </p>
          <button className="mt-6 w-full bg-blue-600 text-black py-3 rounded-full">
            Choose Plan
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
