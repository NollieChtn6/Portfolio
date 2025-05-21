import { useId } from "react";

interface CustomSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  id?: string;
  label?: string;
}

export function Switch({ checked, onChange, id, label }: CustomSwitchProps) {
  const generatedId = useId();
  const switchId = id || generatedId;

  return (
    <div className="flex items-center space-x-2">
      {label && (
        <label htmlFor={switchId} className="font-mono text-iron-100">
          {label}
        </label>
      )}
      <button
        type="button"
        id={switchId}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 p-1
          ${checked ? "bg-hibiscus-800" : "bg-iron-900"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-iron-50 rounded-full shadow-md transition-transform duration-300
            ${checked ? "translate-x-6" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
}
