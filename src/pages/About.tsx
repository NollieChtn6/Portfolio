import { PageTitle } from "@/ui/PageTitle";
import { Button } from "@/ui/Button";
import picture from "../assets/profile_picture.png";
import { motion, easeOut } from "framer-motion";
import { VerticalWordSwitcher } from "@/components/VerticalWordSwitcher";

export function About() {
  const NAV_LINKS = [
    { label: "Parcours", href: "/timeline" },
    { label: "Projets", href: "/projects" },
  ];

  const passions: string[] = [
    "la musculation",
    "la randonnée",
    "la montagne",
    "le parapente",
    "la broderie",
    "la pâtisserie végétale",
    "le café",
    "mon chat Patate 🐱🥔 (a.k.a Badou)",
  ];

  const leftVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  return (
    <main className="about-container flex flex-col md:flex-row overflow-y-auto w-full h-full">
      <motion.section
        aria-labelledby="about-content"
        className="about-content flex flex-col w-full md:w-1/2 p-10 space-y-6 text-iron-200 h-full justify-center"
        variants={leftVariants}
        initial="hidden"
        animate="visible"
      >
        <PageTitle title="À propos de moi" />
        <motion.p className="text-content leading-relaxed" variants={leftVariants}>
          Développeuse web fullstack, je combine curiosité, rigueur technique et envie de créer des
          solutions qui ont un véritable impact. Mon parcours m&rsquo;a permis de développer des
          compétences solides en Angular/Laravel et React/Node.js, ainsi qu&rsquo;une réelle
          compréhension des besoins des utilisateurs et des enjeux métier. J&rsquo;apprécie
          particulièrement les projets où technique et sens fonctionnel avancent de concert,
          permettant de livrer des outils fiables, ergonomiques et utiles. Au-delà du code, je suis
          sensible à l&rsquo;impact social et environnemental des projets auxquels je contribue, et
          je cherche toujours à apprendre, à collaborer et à apporter ma pierre à des initiatives
          concrètes et positives.
        </motion.p>

        <motion.div
          className="about-btns-container flex justify-evenly w-full md:w-3/4 self-center"
          variants={leftVariants}
        >
          {NAV_LINKS.map((navLink) => (
            <Button
              key={navLink.label}
              type="button"
              variant="ghost"
              size="md"
              href={navLink.href}
              className="nav-btn"
            >
              {navLink.label}
            </Button>
          ))}
        </motion.div>
        <div className="flex items-center space-x-2">
          <p className="">💙 J&rsquo;aime </p>
          <VerticalWordSwitcher words={passions} />
        </div>
      </motion.section>

      <motion.section
        className="hidden md:flex about-img-container justify-center items-center w-full md:w-1/2 p-8"
        variants={rightVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={picture}
          alt="Une femme aux cheveux noirs, souriant"
          className="rounded-tl-[35%] rounded-br-[35%] border-4 border-iron-300 md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        />
      </motion.section>
    </main>
  );
}
