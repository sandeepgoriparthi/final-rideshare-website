import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Leaf, BarChart3, Shield } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Revolutionizing Freight Shipping with FlockDirect®
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sustainable, efficient, and reliable shipping solutions for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/shippers/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Efficient Shipping</h3>
                <p className="text-muted-foreground">
                  Optimize your freight shipping with our innovative pooling technology
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Solutions</h3>
                <p className="text-muted-foreground">
                  Reduce your carbon footprint with eco-friendly shipping options
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your shipments with advanced tracking technology
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Transport</h3>
                <p className="text-muted-foreground">
                  Your cargo's safety is our top priority with insurance coverage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Shipping Experience?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join thousands of businesses that trust Freightconnect for their shipping needs
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-started">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}