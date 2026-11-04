/** Ficelle qui sort d'un trou d'attache : le coin bas droit du SVG se pose au centre du trou. */
export function Twine({ className = "" }: { className?: string }) {
  return (
    <svg className={`twine ${className}`} viewBox="0 0 64 60" aria-hidden="true">
      <path
        d="M62,58 C50,40 66,22 46,10 C30,0 14,10 22,24 C28,34 44,26 40,14 C37,6 28,8 30,16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
