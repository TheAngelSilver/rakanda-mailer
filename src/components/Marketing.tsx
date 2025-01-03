interface MarketingActivity {
  month: string;
  event: string;
  strategy: string;
  additionalActivity: string;
}

const marketingActivities: MarketingActivity[] = [
  {
    month: "January",
    event: "Caffeine & Octane",
    strategy:
      "Launch New Year's promotional campaign offering discounts on product bundles",
    additionalActivity: "New Year, New Coffee Ritual social media campaign",
  },
  {
    month: "February",
    event: "Coffee Lovers Run",
    strategy: "Collaborate with local fitness influencer",
    additionalActivity: "Host tasting at local yoga studio",
  },
  // ... Add more months
];

const Marketing = () => {
  return (
    <section className="py-16 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          2025 Marketing Calendar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingActivities.map((activity) => (
            <div
              key={activity.month}
              className="bg-coffee bg-opacity-20 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-coffee-light mb-4">
                {activity.month}
              </h3>
              <div className="space-y-4">
                <p className="text-white">
                  <span className="font-semibold">Event:</span> {activity.event}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Strategy:</span>{" "}
                  {activity.strategy}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Additional:</span>{" "}
                  {activity.additionalActivity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;
