import { useEffect, useRef } from "react";

type SecretMap = Record<string, () => void>;

export function useSecretWords(secrets: SecretMap) {
  const bufferRef = useRef<string>("");
  const maxLength = Math.max(...Object.keys(secrets).map((s) => s.length));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key.length !== 1) return;

      bufferRef.current = (bufferRef.current + key).slice(-maxLength);

      for (const [word, callback] of Object.entries(secrets)) {
        if (bufferRef.current.endsWith(word)) {
          callback();
          bufferRef.current = "";
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [secrets, maxLength]);
}
