import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Utensils, Heart, Users, Award } from "lucide-react";
import exteriorImage from "@/assets/creperie-exterior.png";
import interiorImage from "@/assets/interieur.png";

const values = [
  {
    icon: Utensils,
    title: "Produits Locaux",
    description: "Nous sélectionnons nos ingrédients auprès de producteurs bretons pour garantir fraîcheur et qualité.",
  },
  {
    icon: Heart,
    title: "Fait Maison",
    description: "Toutes nos galettes et crêpes sont préparées sur place avec savoir-faire et passion.",
  },
  {
    icon: Users,
    title: "Ambiance Familiale",
    description: "Un accueil chaleureux dans un cadre authentique pour des moments conviviaux.",
  },
  {
    icon: Award,
    title: "Tradition Bretonne",
    description: "Des recettes traditionnelles transmises avec respect de l'authenticité bretonne.",
  },
];

const LaCreperie = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
                Notre Histoire
              </h1>
              <p className="text-lg text-muted-foreground">
                Depuis 1995, la Crêperie des Grèves perpétue la tradition bretonne dans
                une maison de pierre pleine de charme.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground font-playfair">
                  Une longère bretonne authentique
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Installée dans une charmante longère en pierre typiquement bretonne,
                  notre crêperie vous accueille dans un cadre rustique et chaleureux. Les
                  volets rouge terre cuite qui ornent la façade témoignent de
                  l'authenticité du lieu.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  À l'intérieur, vous découvrirez une ambiance conviviale où murs de
                  pierre et poutres en bois créent une atmosphère accueillante. C'est
                  dans ce décor traditionnel que nous préparons nos galettes et crêpes
                  selon les recettes bretonnes transmises de génération en génération.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre engagement : vous offrir une expérience gastronomique authentique
                  où chaque plat raconte l'histoire de la Bretagne et de ses terroirs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 animate-fade-in">
                <img
                  src={exteriorImage}
                  alt="Façade de la Crêperie des Grèves"
                  className="w-full h-auto rounded-lg shadow-warm"
                />
                <img
                  src={interiorImage}
                  alt="Intérieur de la crêperie"
                  className="w-full h-auto rounded-lg shadow-warm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-widest uppercase text-primary/80 mb-3">Nos Valeurs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-playfair">
                Ce qui fait l'âme de notre crêperie
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Des engagements simples et authentiques qui guident notre quotidien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="relative overflow-hidden rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-soft hover:shadow-warm transition-smooth animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
                    <div className="p-6 md:p-7 text-center">
                      <div className="mx-auto mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 ring-1 ring-primary/20">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 font-playfair">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-playfair">
                Une équipe passionnée
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre équipe familiale met tout son cœur à vous accueillir et à vous
                faire découvrir les saveurs authentiques de la Bretagne. Chaque membre
                partage la même passion pour la gastronomie bretonne et le service
                chaleureux.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Du chef qui prépare les galettes à la crêpière qui réalise les desserts,
                en passant par notre équipe en salle, tous travaillent ensemble pour vous
                offrir une expérience inoubliable.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LaCreperie;
