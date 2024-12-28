import { Check } from 'lucide-react'
import {Button} from "../../components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "₹999/month",
    features: [
      "Up to 5 events",
      "Basic vendor management",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "₹2,499/month",
    features: [
      "Unlimited events",
      "Advanced vendor management",
      "Priority support",
      "Custom branding"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "API access",
      "Custom integrations"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}