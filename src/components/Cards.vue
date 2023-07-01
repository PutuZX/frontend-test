<template>
  <div v-for="card in cards" :key="card.id">
    <router-link :to="getRoute(card.icon)">
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
    </router-link>
  </div>
</template>

<script>
import Monitor from "./icon/Monitor.vue";
import Play from "./icon/Play.vue";
import Message from "./icon/Message.vue";
import Gem from "./icon/Gem.vue";
import Cart from "./icon/Cart.vue";
import Link from "./icon/Link.vue";
import { useCards } from "../store";
import { formatDistanceToNow } from "date-fns";
import { computed } from "vue";

export default {
  setup() {
    const store = useCards();

    function formatDate(date) {
      return "Last update " + formatDistanceToNow(new Date(date)) + " ago";
    }

    function getRoute(icon) {
      switch (icon) {
        case "play":
          return "/getting-started";
        case "comment":
          return "/chat-widget-customization";
        case "deskop":
          return "/using-the-dashboard";
        case "link":
          return "/integrations";
        case "gem":
          return "/advanced-features";
        case "shopping-cart":
          return "/ecommerce-integrations";
        default:
          return "/";
      }
    }

    const sortedCards = computed(() => {
      return store.cards.slice().sort((a, b) => a.order - b.order);
    });

    return {
      cards: sortedCards,
      formatDate,
      getRoute,
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
