import { Link } from "react-router-dom";
import Button from "../components/common/Button";

interface Promotion {
  title: string;
  description: string;
}

interface Event {
  date: string;
  location: string;
  description: string;
  cost: string;
  type: string;
}

const promotions: Promotion[] = [
  {
    title: "Buy One, Get One Free!",
    description: "Celebrate sustainability with our seasonal blend offer.",
  },
  {
    title: "20% Off Merchandise",
    description: "Support ethical coffee with Rakanda Gold branded merch.",
  },
  {
    title: "Free Coffee Tasting Events",
    description:
      "Explore the authentic flavors of Angolan coffee at select locations.",
  },
];

const events: Event[] = [
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
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-coffee-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Sip. Savor. <span className="text-coffee-light">Sustainably.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the rich heritage of Angolan coffee. Join our community to
            receive exclusive offers, event updates, and stories that connect
            you to the farmers who make it all possible.
          </p>
          <div className="mt-8 space-x-4">
            <Link to="/subscribe">
              <Button variant="primary">Subscribe Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white text-center">
            Current Promotions
          </h3>
          <p className="mt-4 text-lg text-gray-400 text-center max-w-3xl mx-auto">
            Support ethical sourcing and enjoy these exclusive deals.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <div
                key={promo.title}
                className="bg-coffee-light shadow-lg rounded-lg p-6 text-center"
              >
                <h4 className="mt-6 text-lg font-semibold text-white">
                  {promo.title}
                </h4>
                <p className="mt-3 text-base text-gray-400">
                  {promo.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-coffee-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center">
            Upcoming Events
          </h3>
          <p className="mt-4 text-lg text-gray-400 text-center max-w-3xl mx-auto">
            Experience Rakanda Gold Coffee firsthand. Meet us at these events
            and celebrate the journey from farm to cup.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.date}
                className="bg-coffee-dark rounded-lg p-6 shadow-lg"
              >
                <span className="text-coffee-light font-semibold block">
                  {event.date}
                </span>
                <h4 className="text-xl text-white font-bold mt-2">
                  {event.location}
                </h4>
                <p className="text-gray-400 mt-2">{event.description}</p>
                <div className="mt-4 text-sm text-gray-300">
                  {event.type} | Cost: {event.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
