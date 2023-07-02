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

export default {
  setup() {
    const store = useCards();

    onMounted(() => {
      store.fetchCards();
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
