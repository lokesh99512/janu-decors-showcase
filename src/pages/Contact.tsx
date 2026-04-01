import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, eventType, message } = form;
    if (!name.trim() || !phone.trim()) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    const waText = encodeURIComponent(
      `Hi Janu Decors!\n\nName: ${name}\nPhone: ${phone}\nEvent: ${eventType}\nMessage: ${message}`
    );
    window.open(`https://wa.me/918197051073?text=${waText}`, "_blank");
    toast({ title: "Redirecting to WhatsApp..." });
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-rose">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">Contact Us</h1>
            <p className="text-muted-foreground">Let's plan your perfect celebration together!</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Call Us</h3>
                  <a href="tel:8197051073" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">81970 51073</p>
                      <p className="text-muted-foreground text-sm">80950 34407</p>
                    </div>
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Email</h3>
                  <a href="mailto:srinathasri9343@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium">srinathasri9343@gmail.com</p>
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Address</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground">Munnekollal Near Marathahalli,<br />Bangalore – 560037</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-card">
                <iframe
                  title="Janu Decors Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2!2d77.7!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
