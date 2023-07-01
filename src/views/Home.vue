<template>
  <div class="content bg-[#FAFAFA] flex items-center justify-center p-12">
    <div class="flex flex-wrap max-w-[1400px] items-center justify-center">
        <Cards />
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import { useCards } from "../store";
import { onMounted, toRef } from "vue";
import axios from "axios";

export default {
  setup() {
    const store = useCards();

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:9001/api/categories"
        );
        store.cards = response.data;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    });
  },
  components: {
    Cards
},
};
</script>

<style>
.content {
  min-height: calc(100vh - 330px);
}
</style>
