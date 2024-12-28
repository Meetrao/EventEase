import Image from 'next/image'

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Planner",
    content: "EventEase has revolutionized the way I plan weddings. It's a game-changer for the Indian event industry!",
    avatar: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Rahul Patel",
    role: "Corporate Event Manager",
    content: "Managing multiple corporate events has never been easier. EventEase is a must-have tool for any serious event planner.",
    avatar: "/placeholder.svg?height=60&width=60"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}