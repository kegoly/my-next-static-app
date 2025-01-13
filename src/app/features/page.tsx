export default function Features() {
    const features = [
      {
        title: "Feature 1",
        description: "Detailed explanation of feature 1 and its benefits",
        details: [
          "Benefit point 1",
          "Benefit point 2",
          "Benefit point 3"
        ]
      },
      {
        title: "Feature 2",
        description: "Detailed explanation of feature 2 and its benefits",
        details: [
          "Benefit point 1",
          "Benefit point 2",
          "Benefit point 3"
        ]
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Features</h1>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <section 
              key={feature.title}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-xl mb-6 text-gray-600">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500">Feature Image</span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
}
