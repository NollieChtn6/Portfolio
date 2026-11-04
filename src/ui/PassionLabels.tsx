import { RotateCw } from "lucide-react";
import { useState } from "react";

import { PASSIONS } from "@/data/passions";
import { Twine } from "./Twine";

const BACKS = ["flip-back-tangerine", "flip-back-ultra", "flip-back-ink"];

const pickStrung = (): Set<number> => {
  const count = 1 + Math.floor(Math.random() * 2);
  const picked = new Set<number>();
  while (picked.size < count) picked.add(Math.floor(Math.random() * PASSIONS.length));
  return picked;
};

export function PassionLabels() {
  const [strung] = useState<Set<number>>(pickStrung);
  const [pressed, setPressed] = useState<Set<number>>(new Set());

  const toggle = (index: number) =>
    setPressed((prev) => {
      const next = new Set(prev);
      if (!next.delete(index)) next.add(index);
      return next;
    });

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {PASSIONS.map((passion, index) => (
        <li key={passion.label}>
          <button
            type="button"
            className="flip"
            aria-pressed={pressed.has(index)}
            onClick={() => toggle(index)}
          >
            <span className="flip-inner">
              <span className="flip-face flip-front">
                <span className="flex w-full items-start justify-between">
                  <span className="caps">Lot n° {String(index + 1).padStart(2, "0")}</span>
                  <span className="flip-hole" aria-hidden="true" />
                </span>
                {strung.has(index) && <Twine />}
                <span className="heading text-lg md:text-xl">{passion.label}</span>
                <span className="flip-foot">
                  <span className="barcode" aria-hidden="true" />
                  <RotateCw aria-hidden="true" size={16} />
                </span>
              </span>
              <span className={`flip-face flip-back ${BACKS[index % BACKS.length]}`}>
                <span className="caps">{passion.label}</span>
                <span className="mt-2 text-sm font-semibold leading-snug md:text-base">
                  <span className="caps mr-1.5">Notes :</span>
                  {passion.note}
                </span>
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
