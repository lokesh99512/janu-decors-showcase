import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", eventType: "", message: "" });

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <a href="tel:8197051073" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">81970 51073</p>
                    <p className="text-muted-foreground text-sm">80950 34407</p>
                  </div>
                </a>
                <a href="mailto:srinathasri9343@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">srinathasri9343@gmail.com</p>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">Munnekollal Near Marathahalli,<br />Bangalore – 560037</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-card">
                <iframe
                  title="Janu Decors Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2!2d77.7!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-6 md:p-8 rounded-lg shadow-card">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-6">Booking Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone *</label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your Phone Number"
                    maxLength={15}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Event Type</label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="">Select Event Type</option>
                    <option>Wedding Decoration</option>
                    <option>Birthday Decoration</option>
                    <option>Baby Shower Decoration</option>
                    <option>Balloon Decoration</option>
                    <option>Flower Decoration</option>
                    <option>Custom Theme</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your event..."
                    maxLength={1000}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-rose-dark gap-2">
                  <Send className="w-4 h-4" /> Send Enquiry via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
