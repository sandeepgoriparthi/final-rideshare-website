export default function SuccessStoriesPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Carrier Success Stories</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Read how carriers are growing their business with FreightConnect
        </p>

        <div className="space-y-12">
          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-4">Smith Transportation</h2>
            <p className="text-muted-foreground mb-6">
              "Since joining FreightConnect, we've increased our revenue by 40% and reduced empty miles by 25%. 
              The platform's efficiency and consistent freight opportunities have transformed our business."
            </p>
            <p className="text-sm font-semibold">John Smith, Owner</p>
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-4">Express Logistics</h2>
            <p className="text-muted-foreground mb-6">
              "FreightConnect's technology has streamlined our operations and helped us grow from 5 trucks to 20 
              in just 18 months. The support team is always there when we need them."
            </p>
            <p className="text-sm font-semibold">Maria Garcia, Operations Manager</p>
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-4">Reliable Routes Inc.</h2>
            <p className="text-muted-foreground mb-6">
              "The quality of freight and ease of booking through FreightConnect has made a significant impact 
              on our bottom line. We've seen a 30% increase in efficiency."
            </p>
            <p className="text-sm font-semibold">Mike Johnson, Fleet Manager</p>
          </div>
        </div>
      </div>
    </div>
  )
}