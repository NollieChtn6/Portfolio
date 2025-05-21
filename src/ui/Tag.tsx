interface TagProps {
  label: string;
  className?: string;
  key?: string;
}

export function Tag({ label, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-4 py-1 m-1 text-xs font-semibold rounded-full bg-gradient-to-r from-persian-green-800 to-hibiscus-900 text-iron-100 shadow-md hover:scale-105 hover:rotate-1 hover:shadow-lg transition-all duration-300 ease-in-out ${className}`}
    >
      #{label}
    </span>
  );
}
