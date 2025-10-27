import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
                Nous trouver
              </h1>
              <p className="text-lg text-muted-foreground">
                La Crêperie des Grèves vous ouvre ses portes dans un cadre authentique et chaleureux.
                Venez découvrir nos spécialités bretonnes !
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <ContactInfo />

        {/* Google Maps */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg shadow-soft overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=23%20Rue%20des%20Gr%C3%A8ves%2C%2022360%20Langueux%2C%20France&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation de la Crêperie des Grèves"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
