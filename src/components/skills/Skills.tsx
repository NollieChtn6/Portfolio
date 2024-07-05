import skills from '../../data/skills.json';
import {
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  ExpressIcon,
  FigmaIcon,
  GitHubIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  ReactIcon,
  SassIcon,
  SequelizeIcon,
  TailwindCSSIcon,
  TrelloIcon,
  VSCodeIcon,
  ViteJsIcon,
  NotionIcon,
  CommunicationIcon,
  TeamIcon,
  CookieIcon,
  OrganisationIcon,
  CuriosityIcon,
} from '../../assets/skills_icons';

function Skills() {
  const iconMapping = {
    HTML5: HTML5Icon,
    CSS3: CSS3Icon,
    JavaScript: JavaScriptIcon,
    TypeScript: TypeScriptIcon,
    Express: ExpressIcon,
    Figma: FigmaIcon,
    GitHub: GitHubIcon,
    'Node.js': NodeJsIcon,
    PostgreSQL: PostgreSQLIcon,
    React: ReactIcon,
    Sass: SassIcon,
    Sequelize: SequelizeIcon,
    'Tailwind CSS': TailwindCSSIcon,
    Trello: TrelloIcon,
    VSCode: VSCodeIcon,
    'Vite.js': ViteJsIcon,
    Notion: NotionIcon,
    Communication: CommunicationIcon,
    Team: TeamIcon,
    Cookie: CookieIcon,
    Organisation: OrganisationIcon,
    Curiosity: CuriosityIcon,
  };
  const frontEndSkills = skills.filter((skill) => skill.type === 'front');
  const backEndSkills = skills.filter((skill) => skill.type === 'back');
  const toolsSkills = skills.filter((skill) => skill.type === 'outil');
  const softSkills = skills.filter((skill) => skill.type === 'soft-skill');

  return (
    <main className="skills-container flex flex-col md:flex-row h-full overflow-hidden">
      <div className="skills-title flex w-full h-[10%] md:h-full md:w-[10%] items-center md:justify-center">
        <h2 className="page-title">Compétences</h2>
      </div>
      <div className="skills-content flex-col md:flex-row w-full md:h-full justify-evenly p-6 space-y-6 max-lg:overflow-y-scroll">
        <div className="skills front-end-skills">
          <h3 className="flex text-3xl font-mono justify-center items-center">
            Front-End
          </h3>
          <div className="front-end-skills-container flex justify-between md:flex-row md:justify-evenly flex-wrap">
            {frontEndSkills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="skill flex flex-col rounded-md h-[125px] w-[110px] p-3 justify-between space-y-3"
                >
                  <img
                    src={iconMapping[skill['icon-mapping']]}
                    alt={skill.alt}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills back-end-skills">
          <h3 className="flex text-3xl font-mono justify-center items-center">
            Back-End
          </h3>
          <div className="front-end-skills-container flex justify-between md:flex-row md:justify-evenly flex-wrap">
            {backEndSkills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="skill flex flex-col rounded-md h-[125px] w-[110px] p-3 justify-between space-y-3"
                >
                  <img
                    src={iconMapping[skill['icon-mapping']]}
                    alt={skill.alt}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills tools">
          <h3 className="flex text-3xl font-mono justify-center items-center">
            Outils
          </h3>
          <div className="front-end-skills-container flex justify-between md:flex-row md:justify-evenly flex-wrap">
            {toolsSkills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="skill flex flex-col rounded-md h-[125px] w-[110px] p-3 justify-between space-y-3"
                >
                  <img
                    src={iconMapping[skill['icon-mapping']]}
                    alt={skill.alt}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills soft-skills">
          <h3 className="flex text-3xl font-mono justify-center items-center">
            Soft Skills
          </h3>
          <div className="front-end-skills-container flex justify-between md:flex-row md:justify-evenly flex-wrap">
            {softSkills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="skill flex flex-col rounded-md h-[125px] w-[110px] p-3 justify-between space-y-3"
                >
                  <img
                    src={iconMapping[skill['icon-mapping']]}
                    alt={skill.alt}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;
