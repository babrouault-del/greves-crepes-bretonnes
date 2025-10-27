import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-playfair">
                Mentions Légales
              </h1>

              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Éditeur du site
                  </h2>
                  <p>
                    <strong>Crêperie des Grèves</strong>
                    <br />
                    23 Rue des Grèves
                    <br />
                    22360 Langueux, France
                    <br />
                    Téléphone : 02 96 00 00 00
                    <br />
                    Email : contact@creperie-des-greves.fr
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Hébergement
                  </h2>
                  <p>
                    Ce site est hébergé par [Nom de l'hébergeur]
                    <br />
                    [Adresse de l'hébergeur]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Propriété intellectuelle
                  </h2>
                  <p className="leading-relaxed">
                    L'ensemble de ce site relève de la législation française et
                    internationale sur le droit d'auteur et la propriété intellectuelle.
                    Tous les droits de reproduction sont réservés, y compris pour les
                    documents téléchargeables et les représentations iconographiques et
                    photographiques.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Protection des données personnelles (RGPD)
                  </h2>
                  <p className="leading-relaxed mb-4">
                    Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
                    modifiée et au Règlement Général sur la Protection des Données (RGPD),
                    vous disposez d'un droit d'accès, de rectification, de suppression et
                    d'opposition aux données personnelles vous concernant.
                  </p>
                  <p className="leading-relaxed">
                    Les informations recueillies via le formulaire de réservation sont
                    destinées uniquement à la gestion de votre réservation et ne seront en
                    aucun cas transmises à des tiers. Vous pouvez exercer vos droits en
                    nous contactant à l'adresse : contact@creperie-des-greves.fr
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Cookies
                  </h2>
                  <p className="leading-relaxed">
                    Ce site n'utilise pas de cookies de suivi ou de publicité. Seuls les
                    cookies techniques nécessaires au bon fonctionnement du site sont
                    utilisés.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Crédits
                  </h2>
                  <p className="leading-relaxed">
                    Conception et réalisation du site : [Nom de l'agence ou du
                    développeur]
                    <br />
                    Photographies : Crêperie des Grèves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegales;
