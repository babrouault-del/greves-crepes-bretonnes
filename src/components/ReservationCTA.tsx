import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const ReservationCTA = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-playfair">
            Réservez votre table
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Un déjeuner entre amis, un dîner en famille ou une pause gourmande ?
            Réservez dès maintenant en ligne ou appelez-nous directement !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-card text-foreground hover:bg-card/90 shadow-soft text-base"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver en ligne
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-card text-card bg-transparent hover:bg-card hover:text-foreground text-base"
            >
              <a href="tel:+33296000000">
                <Phone className="mr-2 h-5 w-5" />
                02 96 00 00 00
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
