import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918197051073?text=Hi%20Janu%20Decors!%20I%20would%20like%20to%20enquire%20about%20decoration%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
