import { NavLink } from 'react-router-dom';

import { Button } from '../ui/button';

import picture from '../../assets/profile_picture_colors.png';

function About() {
  return (
    <main className="about-container flex flex-col md:flex-row max-sm:overflow-y-scroll h-full">
      <div className="about-title flex w-full h-[10%] md:h-full md:w-[10%] items-center md:justify-center">
        <h2 className="page-title">À propos de moi</h2>
      </div>
      <div className="about-content flex flex-col md:flex-row w-full h-[90%] md:h-full">
        <div className="about-content-container flex flex-col grow md:h-full p-9 md:p-6 md:w-2/4 space-y-6 md:place-content-center">
          <p className="text-content">
            Contrairement à beaucoup, je ne suis pas &laquo;&nbsp;tombée dans la
            marmite&nbsp;&raquo; du développement informatique étant petite.
            Issue d&rsquo;une formation littéraire et linguistique, je suis
            titulaire d&rsquo;un master en traduction de l&rsquo;ISIT. Mon
            premier vrai contact avec le développement informatique remonte
            à&nbsp;2019&nbsp;: d&rsquo;abord cheffe de projets éditoriaux et de
            traduction, je bascule petit à petit vers la gestion de projets
            digitaux en collaboration avec une petite équipe de développeurs.
            C&rsquo;est la révélation : moi aussi, je veux devenir
            développeuse&nbsp;! En octobre&nbsp;2023, je mets ce projet à
            exécution en entamant ma reconversion professionnelle&nbsp;: pendant
            6&nbsp;mois, je découvre les bases du développement informatique en
            vue de l&rsquo;obtention du titre professionnel
            &laquo;&nbsp;Développeur web et web mobile&nbsp;&raquo;. Une
            première étape dans mon apprentissage&nbsp;!
          </p>
          <div className="about-btns-container flex justify-evenly w-full md:w-3/4 self-center">
            <NavLink to="/timeline">
              <Button>Parcours</Button>
            </NavLink>
            <NavLink to="/projects">
              <Button>Projets</Button>
            </NavLink>
          </div>
        </div>
        <div className="about-img-container flex h-2/4 md:h-full p-9  md:w-2/4 place-content-center items-center">
          <img
            src={picture}
            alt="Une petite fille avec une corne de licorne, une tresse et des lunettes"
            className="rounded-tl-[35%] rounded-br-[35%] border-4 border-mine-shaft-500 brightness-80 md:max-w-[400px] max-md:h-[300px]"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
