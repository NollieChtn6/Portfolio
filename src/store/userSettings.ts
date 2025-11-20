// store/userSettings.ts
import { create } from "zustand";

type UserSettingsState = {
  backgroundEnabled: boolean;
  setBackground: (enabled: boolean) => void;
  toggleBackground: () => void;
};

const LOCAL_STORAGE_KEY = "background";

export const useUserSettingsStore = create<UserSettingsState>((set) => {
  const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
  const initialBackgroundEnabled = storedValue !== "disabled";

  return {
    backgroundEnabled: initialBackgroundEnabled,
    setBackground: (enabled: boolean) => {
      set({ backgroundEnabled: enabled });
      localStorage.setItem(LOCAL_STORAGE_KEY, enabled ? "enabled" : "disabled");
    },
    toggleBackground: () => {
      set((state) => {
        const newValue = !state.backgroundEnabled;
        localStorage.setItem(LOCAL_STORAGE_KEY, newValue ? "enabled" : "disabled");
        return { backgroundEnabled: newValue };
      });
    },
  };
});
