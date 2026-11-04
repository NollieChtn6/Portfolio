export interface Passion {
  label: string;
  note: string;
}

// `note` : phrase affichée au verso de l'étiquette. `detail` reste à personnaliser.
export const PASSIONS: Passion[] = [
  {
    label: "Musculation",
    note: "fonte, matins sportifs",
  },
  {
    label: "Montagne et randonnée",
    note: "sentiers, forêts, soleil",
  },
  {
    label: "Parapente",
    note: "liberté, légèreté, adrénaline.",
  },
  {
    label: "Crochet et point de croix",
    note: "patience, minutie, créativité",
  },
  {
    label: "Pâtisserie végétale",
    note: "chocolat fondant, vanille, gourmandise",
  },
  {
    label: "Café",
    note: "filtre, espresso, rituel du samedi matin",
  },
  {
    label: "Course à pied",
    note: "motivation, effort",
  },
  {
    label: "Patate (a.k.a Badou)",
    note: "mignonnerie, jus de thon (passion absolue)",
  },
];
