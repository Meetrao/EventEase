import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simplify Your Event Management</h1>
          <p className="text-xl mb-8">EventEase: The all-in-one platform for seamless event planning in India</p>
          <Button size="lg" variant="secondary">Start Free Trial</Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Event Management Dashboard"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}