import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue"

export const useCards = defineStore({
  id: "cards",
  state: () => ({
    cards: [],
  }),
  actions: {
    async fetchCards() {
      try {
        const response = await axios.get(
          "/api/categories"
        );
        this.cards = response.data;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
});

export const useArticles = defineStore({
    id: "articles",
    state: () => ({
      articles: [],
      categoryId: ref("")
    }),
    actions: {
        async fetchArticles() {
            try {
              if (this.categoryId) {
                const response = await axios.get(
                  `/api/category/${this.categoryId}`
                );
                this.articles = response.data;
              } else {
                console.log("categoryId is not defined");
              }
            } catch (error) {
              console.error("Error fetching data", error);
            }
          }
    },
  });
