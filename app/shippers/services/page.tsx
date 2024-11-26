import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Truck, BarChart3, Leaf } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">FlockDirect® Services</h1>
          <p className="text-xl text-muted-foreground">
            Innovative shipping solutions designed for modern businesses
          </p>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Shared Truckload Service</CardTitle>
                  <CardDescription>Efficient and sustainable shipping solution</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our flagship service combines multiple shipments heading in the same direction,
                reducing costs and environmental impact while maintaining delivery speed and reliability.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Guaranteed capacity and pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span>Real-time tracking and visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-primary" />
                  <span>Reduced carbon emissions</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/shippers/quote">Get a Quote</Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Less Than Truckload (LTL)</CardTitle>
                <CardDescription>Flexible shipping for smaller freight</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfect for shipments that don't require a full truck. Cost-effective
                  and reliable service with competitive transit times.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/shippers/quote">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Full Truckload (FTL)</CardTitle>
                <CardDescription>Dedicated capacity for larger shipments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When you need an entire truck for your freight. Direct service with
                  guaranteed capacity and competitive rates.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/shippers/quote">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}