"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { calculateFreightCost, FREIGHT_RATES } from "@/lib/utils"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    pickup: "",
    delivery: "",
    freightType: "",
    weight: "",
    length: "",
    width: "",
    distance: "",
  })
  const [quote, setQuote] = useState<number | null>(null)

  const handleCalculate = () => {
    const weight = parseFloat(formData.weight)
    const distance = parseFloat(formData.distance)
    
    if (!formData.freightType || isNaN(weight) || isNaN(distance)) {
      return
    }

    const rates = FREIGHT_RATES[formData.freightType as keyof typeof FREIGHT_RATES]
    const fuelSurcharge = distance * 0.10 // $0.10 per mile fuel surcharge
    const handlingFee = weight * 0.05 // $0.05 per pound handling fee
    
    const cost = calculateFreightCost({
      baseRate: rates.baseRate,
      weightFactor: rates.weightFactor,
      weight,
      distanceFactor: rates.distanceFactor,
      distance,
      additionalCharges: fuelSurcharge + handlingFee
    })

    setQuote(Math.round(cost * 100) / 100)
  }

  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Get a Quote</h1>
        <Card>
          <CardHeader>
            <CardTitle>Shipping Details</CardTitle>
            <CardDescription>
              Fill out the form below to get an instant quote for your shipment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input 
                  id="pickup"
                  placeholder="Enter city or zip code"
                  value={formData.pickup}
                  onChange={(e) => setFormData(prev => ({ ...prev, pickup: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery">Delivery Location</Label>
                <Input 
                  id="delivery"
                  placeholder="Enter city or zip code"
                  value={formData.delivery}
                  onChange={(e) => setFormData(prev => ({ ...prev, delivery: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="distance">Estimated Distance (miles)</Label>
              <Input 
                id="distance"
                type="number"
                placeholder="Enter estimated distance"
                value={formData.distance}
                onChange={(e) => setFormData(prev => ({ ...prev, distance: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="freight-type">Freight Type</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, freightType: value }))}>
                <SelectTrigger id="freight-type">
                  <SelectValue placeholder="Select freight type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                  <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                  <SelectItem value="partial">Partial Truckload</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (lbs)</Label>
                <Input 
                  id="weight"
                  type="number"
                  placeholder="Enter weight"
                  value={formData.weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="length">Length (ft)</Label>
                <Input 
                  id="length"
                  type="number"
                  placeholder="Enter length"
                  value={formData.length}
                  onChange={(e) => setFormData(prev => ({ ...prev, length: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width">Width (ft)</Label>
                <Input 
                  id="width"
                  type="number"
                  placeholder="Enter width"
                  value={formData.width}
                  onChange={(e) => setFormData(prev => ({ ...prev, width: e.target.value }))}
                />
              </div>
            </div>

            <Button onClick={handleCalculate} className="w-full">Calculate Quote</Button>

            {quote !== null && (
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Estimated Shipping Cost</h3>
                <p className="text-3xl font-bold text-primary">${quote.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  *This is an estimated cost. Final price may vary based on actual weight and distance.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}