import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Production</h1>
          <p className="text-xl mb-8 text-gray-600">
            Discover how our solution can transform your workflow
          </p>
          <a href="/features" 
             className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Simple",
              description: "Easy to understand and implement",
              icon: "/icons/simple.webp"
            },
            {
              title: "Flexible",
              description: "Adaptable to your needs",
              icon: "/icons/flexible.webp"
            },
            {
              title: "Powerful",
              description: "Robust features for any scale",
              icon: "/icons/powerful.webp"
            }
          ].map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="inline-block mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={300}
                  height={300}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
