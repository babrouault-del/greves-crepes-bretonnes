import { MapPin, Phone, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-playfair">
            Venez goûter l'authenticité bretonne !
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            La Crêperie des Grèves vous accueille dans une ambiance chaleureuse et conviviale. 
            Découvrez nos galettes et crêpes maison préparées avec passion et des produits locaux de qualité.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-card/20">
              <MapPin className="w-8 h-8 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Adresse</h3>
              <p className="text-primary-foreground/90">
                23 Rue des Grèves<br />
                22360 Langueux<br />
                France
              </p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-card/20">
              <Phone className="w-8 h-8 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Téléphone</h3>
              <a 
                href="tel:+33296000000" 
                className="text-primary-foreground/90 hover:text-primary-foreground transition-smooth text-lg font-medium"
              >
                02 96 00 00 00
              </a>
            </div>

            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-card/20">
              <Clock className="w-8 h-8 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Horaires</h3>
              <p className="text-primary-foreground/90">
                Mardi - Dimanche<br />
                12h00 - 14h00<br />
                19h00 - 21h30
              </p>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-lg text-primary-foreground/90 italic">
              "Une cuisine authentique qui ravit les papilles dans un cadre typiquement breton"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
