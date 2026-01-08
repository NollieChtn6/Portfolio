export default function Footer() {
  return (
    <footer className="footer-container flex flex-col items-center gap-2">
      <p className="copyright-content font-mono text-sm text-iron-50">
        © NC•6 | Tous droits réservés
      </p>

      <p className="hidden md:block text-xs opacity-20 font-mono">
        ⌨️ Certains mots sont plus puissants que d&rsquo;autres…
      </p>
    </footer>
  );
}
