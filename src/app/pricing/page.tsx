export default function Pricing() {
    const plans = [
      {
        name: "Starter",
        price: "$9",
        features: [
          "Basic feature 1",
          "Basic feature 2",
          "Basic feature 3"
        ]
      },
      {
        name: "Professional",
        price: "$29",
        features: [
          "Pro feature 1",
          "Pro feature 2",
          "Pro feature 3",
          "Pro feature 4"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Enterprise feature 1",
          "Enterprise feature 2",
          "Enterprise feature 3",
          "Enterprise feature 4",
          "Enterprise feature 5"
        ]
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Pricing Plans</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}
