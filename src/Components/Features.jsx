import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Optimized for speed and performance.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    desc: "Looks perfect on every device.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    desc: "Built with modern security standards.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Everything you need to launch
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
