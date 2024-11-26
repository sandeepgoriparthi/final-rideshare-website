export default function CareersPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Help us revolutionize the freight industry
        </p>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
                <p className="text-muted-foreground mb-4">
                  Build the next generation of freight technology
                </p>
                <p className="text-sm text-muted-foreground">Location: Remote</p>
              </div>

              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Logistics Coordinator</h3>
                <p className="text-muted-foreground mb-4">
                  Manage and optimize freight operations
                </p>
                <p className="text-sm text-muted-foreground">Location: Chicago, IL</p>
              </div>

              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Account Executive</h3>
                <p className="text-muted-foreground mb-4">
                  Drive business growth and client relationships
                </p>
                <p className="text-sm text-muted-foreground">Location: New York, NY</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Competitive salary and equity</li>
              <li>Health, dental, and vision insurance</li>
              <li>Flexible PTO policy</li>
              <li>Remote work options</li>
              <li>Professional development budget</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}