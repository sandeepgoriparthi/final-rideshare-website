export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About FreightConnect</h1>
        <div className="prose prose-lg">
          <p className="text-xl text-muted-foreground mb-8">
            FreightConnect is revolutionizing the freight industry through innovative technology and sustainable solutions.
          </p>
          
          <div className="grid gap-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To create a more efficient and sustainable freight network by connecting shippers with reliable carriers through innovative technology.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading digital freight network, known for reliability, efficiency, and environmental responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>Innovation in Transportation</li>
                <li>Environmental Responsibility</li>
                <li>Customer Success</li>
                <li>Operational Excellence</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}