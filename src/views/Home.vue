<template>
  <div class="content bg-[#FAFAFA] flex items-center justify-center">
    <div class="flex flex-wrap w-[1400px] items-start justify-center">
      <div v-for="card in cards" :key="card.id">
        <div
          v-if="card.enabled == true"
          class="flex flex-col items-center justify-center bg-white pt-8 pb-8 w-[400px] h-[250px] m-3 rounded-md border space-y-5 cursor-pointer"
        >
          <Play size="70" v-if="card.icon == 'play'" />
          <Message size="70" v-else-if="card.icon == 'comment'" />
          <Monitor size="70" v-else-if="card.icon == 'deskop'" />
          <Link size="70" v-else-if="card.icon == 'link'" />
          <Gem size="70" v-else-if="card.icon == 'gem'" />
          <Cart size="70" v-else />
          <p class="font-bold text-xl">{{ card.title }}</p>
          <div class="text-center">
            <p class="text-[#03A84E]">{{ card.totalArticle }} articles</p>
            <p class="text-xs text-[#9C9AA6]">{{ formatDate(card.updatedOn) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Monitor from "../components/icon/Monitor.vue";
import Play from "../components/icon/Play.vue";
import Message from "../components/icon/Message.vue";
import Gem from "../components/icon/Gem.vue";
import Cart from "../components/icon/Cart.vue";
import Link from "../components/icon/Link.vue";
import { useCards } from "../store";
import { onMounted, toRef } from "vue";
import axios from "axios";
import { formatDistanceToNow } from 'date-fns';

export default {
  setup() {
    const store = useCards();

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:9001/api/categories"
        );
        console.log(response.data); // Check your data here
        store.cards = response.data;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    });

    function formatDate(date) {
        return 'Last update ' + formatDistanceToNow(new Date(date)) + ' ago';
    };

    return {
      cards: toRef(store, "cards"),
      formatDate
    };
  },
  components: {
    Monitor,
    Play,
    Message,
    Gem,
    Cart,
    Link,
  },
};
</script>

<style>
.content {
  height: calc(100vh - 330px);
}
</style>
