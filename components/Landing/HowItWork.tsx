import Image from "next/image"

const steps = [
  {
    number: "1",
    title: "Real-Time Market Data",
    description: "Stay updated with the latest market prices and trends for your crops.",
    image: "/market data.jpg",
    alt: "Real-time market data dashboard",
  },
  {
    number: "2",
    title: "Access Market Data",
    description: "Get real-time market information and weather updates.",
    image: "/Access Market Data.jpeg",
    alt: "Market data access interface",
  },
  {
    number: "3",
    title: "Grow with Insights",
    description: "Utilize our resources and community to enhance your farming or trading operations.",
    image: "/Business support-amico.png",
    alt: "Growth insights and analytics",
  },
]

function HowItWork() {
  return (
    <section id="howitwork" className="relative w-full overflow-hidden px-4 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="border-b-4 w-24 mx-auto border-green-500 mt-2 rounded-full" />
      </div>

      {/* Curved line background */}
      <div className="relative max-w-7xl mx-auto py-20">
        {/* Steps - Absolute layout for larger screens, stacked on small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:mt-0 mt-12 text-center">
              <div className="text-green-600 text-5xl font-bold mb-2">{step.number}</div>
              <div className="w-6 h-6 border-4 border-green-600 bg-white rounded-full mb-4" />

              {/* Card with image inside */}
              <div className="border border-green-400 p-6 rounded-lg shadow-sm max-w-xs bg-white hover:shadow-md transition-shadow duration-300">
                {/* Image inside card */}
                <div className="mb-4">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.alt}
                    width={150}
                    height={120}
                    className="rounded-md mx-auto object-cover"
                  />
                </div>

                <h3 className="font-semibold mb-3 text-lg text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-green-100 rounded-full opacity-30 z-0" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-green-100 rounded-full opacity-30" />
    </section>
  )
}

export default HowItWork
