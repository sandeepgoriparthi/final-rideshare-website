export default function ContactPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">General Inquiries</h3>
                <p className="text-muted-foreground">info@freightconnect.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Support</h3>
                <p className="text-muted-foreground">support@freightconnect.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sales</h3>
                <p className="text-muted-foreground">sales@freightconnect.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">1-800-FREIGHT</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Office Locations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1">Headquarters</h3>
                <p className="text-muted-foreground">
                  123 Freight Street<br />
                  Chicago, IL 60601
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">East Coast Office</h3>
                <p className="text-muted-foreground">
                  456 Logistics Avenue<br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">West Coast Office</h3>
                <p className="text-muted-foreground">
                  789 Transport Boulevard<br />
                  Los Angeles, CA 90001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}