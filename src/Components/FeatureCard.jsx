const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default FeatureCard;
