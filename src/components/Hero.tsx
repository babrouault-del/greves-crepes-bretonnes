import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/hero-crepes.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
            <UtensilsCrossed className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Crêperie traditionnelle bretonne
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground font-playfair text-balance">
            Bienvenue à la Crêperie des Grèves
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-balance">
            Un lieu gourmand où tradition et convivialité se rencontrent à deux pas de la
            baie de Saint-Brieuc.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-card text-foreground hover:bg-card/90 shadow-warm text-base"
            >
              <Link to="/menu">
                Découvrir le menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-card text-card bg-transparent hover:bg-card hover:text-foreground text-base"
            >
              <Link to="/contact">Réserver une table</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
