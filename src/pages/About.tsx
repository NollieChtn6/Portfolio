import { PageTitle } from "@/ui/PageTitle";
import { Button } from "../ui/Button";

import picture from "../assets/profile_picture.png";

export function About() {
  const NAV_LINKS = [
    {
      label: "Parcours",
      href: "/timeline",
    },
    {
      label: "Projets",
      href: "/projects",
    },
  ];

  return (
    <main className="about-container flex flex-col md:flex-row max-sm:overflow-y-scroll h-full">
      <PageTitle title="À propos de moi" />
      <section
        aria-labelledby="about-heading"
        className="about-content flex flex-col md:flex-row w-full h-[90%] md:h-full"
      >
        <div className="about-content-container flex flex-col grow md:h-full p-9 md:p-6 md:w-2/4 space-y-6 md:place-content-center">
          <p className="text-content">
            Contrairement à beaucoup, je ne suis pas &laquo;&nbsp;tombée dans la
            marmite&nbsp;&raquo; du développement informatique étant petite. Issue d&rsquo;une
            formation littéraire et linguistique, je suis titulaire d&rsquo;un master en traduction.
            Mon premier vrai contact avec le développement informatique remonte à&nbsp;2019&nbsp;:
            d&rsquo;abord cheffe de projets éditoriaux et de traduction, je bascule petit à petit
            vers la gestion de projets digitaux en collaboration avec une petite équipe de
            développeurs. C&rsquo;est la révélation : moi aussi, je veux devenir développeuse&nbsp;!
            En octobre&nbsp;2023, je mets ce projet à exécution en entamant ma reconversion
            professionnelle&nbsp;: pendant 6&nbsp;mois, je découvre les bases du développement
            informatique en vue de l&rsquo;obtention du titre professionnel &laquo;&nbsp;Développeur
            web et web mobile&nbsp;&raquo;. Une première étape dans mon apprentissage&nbsp;!
          </p>
          <div className="about-btns-container flex justify-evenly w-full md:w-3/4 self-center">
            {NAV_LINKS.map((navLink) => (
              <Button
                key={navLink.label}
                type="button"
                variant="primary"
                size="md"
                href={navLink.href}
              >
                {navLink.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="about-img-container flex h-2/4 md:h-full p-9  md:w-2/4 place-content-center items-center">
          <img
            src={picture}
            alt="Une femme aux cheveux noirs, souriant"
            className="rounded-tl-[35%] rounded-br-[35%] border-4 border-iron-500 brightness-80 md:max-w-[400px] max-md:h-[300px]"
          />
        </div>
      </section>
    </main>
  );
}
