import RotatingText from "@/ui/RotatingText";
import { useEffect, useState } from "react";

type VerticalSwitcherProps = {
  words: string[];
  interval?: number;
};

export function VerticalWordSwitcher({ words, interval = 2500 }: VerticalSwitcherProps) {
  const [_index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block h-auto overflow-hidden">
      <RotatingText
        texts={words}
        mainClassName="glowy-text overflow-hidden justify-center"
        staggerFrom={"first"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2500}
      />
    </span>
  );
}
