import { Github, LinkedinIcon } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer-container flex h-16 mt-auto items-center p-6">
      <div className="copyright-container flex w-2/4 h-full">
        <p className="copyright-content text-sm text-woodsmoke-100">
          © NC6 | Tous droits réservés
        </p>
      </div>

      <div className="social-container flex flex-row w-2/4 justify-around">
        <a
          href="https://www.linkedin.com/in/no%C3%ABllie-chatain-six/"
          className="social-content flex w-2/4 justify-center align-middle space-x-3"
          title="To: LinkedIn profile"
        >
          <LinkedinIcon strokeWidth={1.5} color="#e7e7e7" />
          <span className="max-md:hidden text-sm text-woodsmoke-100">
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/NollieChtn6"
          className="social-content flex w-2/4 justify-center align-middle space-x-3"
          title="To: Github profile"
        >
          <Github strokeWidth={1.5} color="#e7e7e7" />
          <span className="max-md:hidden text-sm text-woodsmoke-100">
            Github
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
