import { CheckCircle } from 'lucide-react'

const steps = [
  "Sign up for an EventEase account",
  "Create your event and add details",
  "Invite team members and vendors",
  "Manage tasks, schedules, and budgets",
  "Track progress and get real-time updates",
  "Host a successful event!"
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How EventEase Works</h2>
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-primary mr-4" />
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}