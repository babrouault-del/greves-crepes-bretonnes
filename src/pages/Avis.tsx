import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

const reviews = [
  {
    author: "Marie L.",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Excellente crêperie ! Les galettes sont délicieuses et authentiques. L'accueil est chaleureux et le cadre très agréable. Je recommande vivement la galette complète et la crêpe au caramel beurre salé.",
  },
  {
    author: "Thomas B.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Un vrai régal ! Produits frais, galettes savoureuses et service impeccable. L'ambiance bretonne est au rendez-vous. C'est notre crêperie préférée dans la région.",
  },
  {
    author: "Sophie M.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Superbe découverte ! Le cadre est magnifique avec cette belle maison en pierre. Les crêpes sont préparées avec soin et les produits sont de qualité. Excellent rapport qualité-prix.",
  },
  {
    author: "Jean-Pierre D.",
    rating: 4,
    date: "Il y a 2 mois",
    text: "Très bonne crêperie traditionnelle. Les galettes de sarrasin sont excellentes et l'accueil familial. Petit bémol sur le temps d'attente en période d'affluence mais ça vaut le coup !",
  },
  {
    author: "Claire R.",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Une adresse à ne pas manquer ! Tout est fait maison et ça se sent. Le cidre breton est excellent et les portions sont généreuses. L'équipe est aux petits soins.",
  },
  {
    author: "Nicolas P.",
    rating: 5,
    date: "Il y a 3 mois",
    text: "Authenticité et qualité au rendez-vous. Les galettes sont vraiment délicieuses et le caramel beurre salé est une tuerie ! L'ambiance conviviale et le service souriant font de ce lieu un endroit parfait.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Avis = () => {
  const averageRating = 4.6;
  const totalReviews = 127;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
                Avis Clients
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrez ce que nos clients pensent de nous
              </p>
              <div className="inline-flex flex-col items-center space-y-2 bg-card px-8 py-6 rounded-lg shadow-soft">
                <div className="flex items-center space-x-2">
                  <span className="text-5xl font-bold text-primary">{averageRating}</span>
                  <div className="flex flex-col">
                    <StarRating rating={5} />
                    <span className="text-sm text-muted-foreground mt-1">
                      Basé sur {totalReviews} avis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-soft p-6 hover:shadow-warm transition-smooth animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-foreground">{review.author}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-soft p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">
                Rejoignez nos clients satisfaits !
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Venez découvrir pourquoi nos clients nous font confiance depuis des années
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth shadow-warm font-medium text-lg"
              >
                Réserver votre table
              </a>
            </div>
          </div>
        </section>

        {/* Google Reviews Link */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4">
              Retrouvez tous nos avis sur Google Maps
            </p>
            <a
              href="https://www.google.com/maps/search/cr%C3%AAperie+des+gr%C3%A8ves+langueux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth font-medium"
            >
              Voir sur Google Maps
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Avis;
