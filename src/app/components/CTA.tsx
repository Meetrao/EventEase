import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Event Management?</h2>
        <p className="text-xl mb-8">Join thousands of event planners who trust EventEase</p>
        <Button size="lg" variant="secondary">Start Your Free Trial</Button>
      </div>
    </section>
  )
}

