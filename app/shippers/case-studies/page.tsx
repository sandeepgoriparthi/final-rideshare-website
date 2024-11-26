export default function CaseStudiesPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Shipper Case Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Learn how businesses are optimizing their shipping with FreightConnect
        </p>

        <div className="space-y-12">
          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-4">Global Manufacturing Co.</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Reduced shipping costs by 23% and improved delivery times by 15% through FreightConnect's 
                optimized routing and carrier matching.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 23% cost reduction</li>
                <li>• 15% faster deliveries</li>
                <li>• 99.8% on-time delivery rate</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-4">Tech Solutions Inc.</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Streamlined shipping operations and achieved 100% visibility across their supply chain with 
                FreightConnect's technology platform.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Real-time tracking implementation</li>
                <li>• 40% reduction in administrative time</li>
                <li>• Enhanced customer satisfaction</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-4">Retail Giants LLC</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Improved inventory management and reduced stockouts by 35% through reliable and 
                efficient shipping solutions.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 35% reduction in stockouts</li>
                <li>• Improved inventory turnover</li>
                <li>• Optimized shipping routes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}