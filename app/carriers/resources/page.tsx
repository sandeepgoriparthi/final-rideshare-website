import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Video, Download } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Carrier Resources</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to succeed as a FlockFreight carrier partner
          </p>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Essential forms and paperwork</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="flex items-center justify-between hover:text-primary">
                    <span>Carrier Agreement</span>
                    <Download className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between hover:text-primary">
                    <span>Insurance Requirements</span>
                    <Download className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between hover:text-primary">
                    <span>Payment Terms</span>
                    <Download className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Training Materials</CardTitle>
                    <CardDescription>Learn about our processes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Load Acceptance Guidelines</li>
                  <li>Safety Procedures</li>
                  <li>Communication Protocols</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Access Training</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription>Step-by-step guides</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Platform Navigation</li>
                  <li>Load Booking Process</li>
                  <li>Document Submission</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Watch Videos</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}