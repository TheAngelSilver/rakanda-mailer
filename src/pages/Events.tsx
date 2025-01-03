const events = [
  {
    date: "January 5, 2025",
    location: "Caffeine & Octane",
    description: "Network with car enthusiasts and enjoy premium coffee",
    cost: "Low",
    type: "Lifestyle",
  },
  {
    date: "February 15, 2025",
    location: "Coffee Lovers Run 5K/10K/13.1",
    description: "Energy-boosting coffee samples for runners",
    cost: "Medium",
    type: "Fitness",
  },
  {
    date: "March 9, 2025",
    location: "Tucker Cruise-In",
    description: "Special themed packaging and exclusive blends",
    cost: "Low",
    type: "Community",
  },
  // ... Add more events following the same pattern
];

const Events = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          2025 Events Calendar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.date}
              className="bg-coffee-dark rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <div className="text-coffee-light font-semibold mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl text-white font-bold mb-4">
                  {event.location}
                </h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">
                    Cost: {event.cost} | {event.type}
                  </span>
                  <button className="bg-coffee-light px-4 py-2 rounded text-white hover:bg-coffee transition-colors">
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
