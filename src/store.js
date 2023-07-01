import { defineStore } from "pinia";

export const useCards = defineStore({
  id: "cards",
  state: () => ({
    cards: [],
  }),
});
