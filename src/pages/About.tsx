import { ArrowRight } from "lucide-react";

import picture from "../assets/profile_picture.png";
import { Button } from "@/ui/Button";
import { PassionLabels } from "@/ui/PassionLabels";

export function About() {
  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 gap-12 px-5 pb-16 pt-6 md:grid-cols-12 md:px-10">
      <section className="md:col-span-7" aria-labelledby="about-title">
        <h1 id="about-title" className="display display-lg">
          À propos de moi
        </h1>
        <p className="prose-body mt-8">
          Développeuse web fullstack, je combine curiosité, rigueur technique et envie de créer des
          solutions qui ont un véritable impact. Mon parcours m&rsquo;a permis de développer des
          compétences solides en Angular/Laravel et React/Node.js, ainsi qu&rsquo;une réelle
          compréhension des besoins des utilisateurs et des enjeux métier. J&rsquo;apprécie
          particulièrement les projets où technique et sens fonctionnel avancent de concert,
          permettant de livrer des outils fiables, ergonomiques et utiles. Au-delà du code, je suis
          sensible à l&rsquo;impact social et environnemental des projets auxquels je contribue, et
          je cherche toujours à apprendre, à collaborer et à apporter ma pierre à des initiatives
          concrètes et positives.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/timeline" icon={<ArrowRight aria-hidden="true" size={20} />}>
            Mon parcours
          </Button>
          <Button variant="ghost" href="/projects">
            Mes projets
          </Button>
        </div>
      </section>

      <div
        className="stamp-in md:col-span-5 md:justify-self-end"
        style={{ "--r": "2deg", "--r0": "-5deg", "--i": 1 } as React.CSSProperties}
      >
        <div className="label-card max-w-sm p-3 md:max-w-md">
          <img
            src={picture}
            alt="Une femme aux cheveux noirs, souriant"
            className="block w-full rounded-[3px]"
          />
        </div>
      </div>

      <section aria-labelledby="passions-title" className="md:col-span-12">
        <h2 id="passions-title" className="display display-md">
          Notes de dégustation
        </h2>
        <p className="mb-6 mt-3 text-lg">Mes passions.</p>
        <PassionLabels />
      </section>
    </main>
  );
}
