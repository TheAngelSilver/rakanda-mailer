const About = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Story
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Welcome to Rakanda Coffee, where passion meets perfection in every
              cup. Our journey began with a simple love for exceptional coffee
              and a dream to share it with the world.
            </p>
            <p className="text-lg leading-relaxed">
              We source our beans directly from sustainable farms, ensuring both
              quality and ethical practices in every batch we roast.
            </p>
          </div>
          <div className="bg-coffee-dark p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-coffee-light mb-4">
              Our Values
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">🌱</span> Sustainability
              </li>
              <li className="flex items-center">
                <span className="mr-2">💫</span> Quality
              </li>
              <li className="flex items-center">
                <span className="mr-2">🤝</span> Community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
