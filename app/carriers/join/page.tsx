import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, Shield, DollarSign } from "lucide-react"

export default function JoinPage() {
  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Join Our Carrier Network</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with FlockFreight and grow your business with consistent freight opportunities
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Regular Loads</h3>
                  <p className="text-muted-foreground">
                    Access a steady stream of freight opportunities
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Competitive Rates</h3>
                  <p className="text-muted-foreground">
                    Earn more with our fair pricing structure
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Payment</h3>
                  <p className="text-muted-foreground">
                    Get paid faster with our expedited payment options
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Carrier Application</CardTitle>
              <CardDescription>
                Fill out the form below to start the application process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mc-number">MC Number</Label>
                <Input id="mc-number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="equipment-type">Equipment Type</Label>
                <Select>
                  <SelectTrigger id="equipment-type">
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dry-van">Dry Van</SelectItem>
                    <SelectItem value="reefer">Reefer</SelectItem>
                    <SelectItem value="flatbed">Flatbed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Application</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}