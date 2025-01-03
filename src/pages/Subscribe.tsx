import Button from "../components/common/Button";

const Subscribe = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-coffee-dark rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Join Our Coffee Club
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-coffee bg-opacity-50 text-white border border-coffee-light focus:ring-2 focus:ring-coffee-light"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-coffee bg-opacity-50 text-white border border-coffee-light focus:ring-2 focus:ring-coffee-light"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" fullWidth>
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Join now and get 10% off your first order!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
