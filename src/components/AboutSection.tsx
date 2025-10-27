import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import exteriorImage from "@/assets/creperie-exterior.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-playfair">
              Notre Crêperie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Installée dans une longère en pierre au cœur de Langueux, la Crêperie des
              Grèves vous accueille dans un cadre authentique et plein de charme.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Toutes nos galettes de sarrasin sont confectionnées sur place à base de
              farine bretonne, et nos crêpes sucrées font la part belle au caramel au
              beurre salé maison.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous sélectionnons avec soin nos produits locaux pour vous garantir une
              expérience gustative authentique dans une ambiance chaleureuse et
              conviviale.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 shadow-warm">
              <Link to="/la-creperie">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="animate-slide-up">
            <div className="relative rounded-lg overflow-hidden shadow-warm">
              <img
                src={exteriorImage}
                alt="Crêperie des Grèves - Façade extérieure"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-soft">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold">4.6</span>
                  <div className="flex text-yellow-300">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
