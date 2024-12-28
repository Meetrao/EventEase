import { Calendar, Users, Truck, Bell } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Effortlessly manage event timelines and schedules."
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "Streamline communication with all your event vendors."
  },
  {
    icon: Truck,
    title: "Logistics Tracking",
    description: "Keep track of all your event logistics in one place."
  },
  {
    icon: Bell,
    title: "Real-time Updates",
    description: "Get instant notifications on important event changes."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose EventEase?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

