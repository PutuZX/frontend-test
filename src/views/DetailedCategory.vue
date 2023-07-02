<template>
  <div class="content bg-[#FAFAFA] flex justify-center w-screen">
    <div class="flex flex-col w-[1200px]">
      <div class="pt-6 pb-6 w-full">
        <div class="text-[#22B263] ml-6">
          <a href="/">All categories</a>
          <span class="fa fa-angle-right pl-2 pr-2 text-[#D3D3D3]"></span>
          <span class="text-[#9C9AA6]">{{ pageData.title }}</span>
        </div>
      </div>
      <div class="flex responsive-flex">
        <div>
          <div class="flex items-center justify-center w-[420px]">
            <div
              class="flex flex-col bg-white items-center justify-center pt-8 pb-8 w-[400px] rounded-md border"
            >
              <Play :size="70" v-if="pageData.icon == 'play'" />
              <Message :size="70" v-else-if="pageData.icon == 'comment'" />
              <Monitor :size="70" v-else-if="pageData.icon == 'deskop'" />
              <Link :size="70" v-else-if="pageData.icon == 'link'" />
              <Gem :size="70" v-else-if="pageData.icon == 'gem'" />
              <Cart :size="70" v-else />

              <p class="font-bold text-[25px] pt-6">{{ pageData.title }}</p>
              <p class="text-xs text-[#9C9AA6]">
                {{ formatDate(pageData.updatedOn) }}
              </p>

              <div class="pt-8 pb-8 w-full">
                <hr />
              </div>

              <div class="flex flex-col items-center text-center w-[300px]">
                <div
                  class="fa fa-exclamation-circle fa-2x text-[#03A84E]"
                ></div>
                <p class="pt-4 text-[#9C9AA6]">{{ pageData.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-full responsive-div pb-12">
          <div class="w-full">
            <Articles />
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
import wpformsIcon from "../components/icon/wpformsIcon.vue";
import Articles from "../components/Articles.vue";
import { useRoute } from "vue-router";
import { useCards, useArticles } from "../store";
import { ref} from "vue";
import { formatDistanceToNow, format } from "date-fns";

export default {
  async setup() {
    const route = useRoute();
    const store = useCards();
    const store2 = useArticles();
    const currentRoute = route?.path;
    let pageData = ref({});

    await store.fetchCards();

    function routeData(currentRoute) {
      switch (currentRoute) {
        case "/getting-started":
          pageData.value = store.cards.find((card) => card.icon == "play");
          break;
        case "/chat-widget-customization":
          pageData.value = store.cards.find((card) => card.icon == "comment");
          break;
        case "/using-the-dashboard":
          pageData.value = store.cards.find((card) => card.icon == "deskop");
          break;
        case "/integrations":
          pageData.value = store.cards.find((card) => card.icon == "link");
          break;
        case "/advanced-features":
          pageData.value = store.cards.find((card) => card.icon == "gem");
          break;
        case "/ecommerce-integrations":
          pageData.value = store.cards.find(
            (card) => card.icon == "shopping-cart"
          );
          break;
      }
      store2.categoryId = pageData.value.id;
    }

    routeData(currentRoute);
    store2.categoryId = pageData.value.id;

    function articleDate(date) {
      return "Updated " + format(new Date(date), "MMMM, d yyyy");
    }

    await store2.fetchArticles();

    function formatDate(date) {
      if (!date) {
        return "Date not provided";
      }
      try {
        return "Last update " + formatDistanceToNow(new Date(date)) + " ago";
      } catch (e) {
        console.error(e);
        return "Invalid date";
      }
    }

    return {
      articles: store2.articles,
      pageData,
      currentRoute,
      route,
      routeData,
      formatDate,
      articleDate,
    };
  },
  components: {
    Monitor,
    Play,
    Message,
    Gem,
    Cart,
    Link,
    wpformsIcon,
    Articles
  },
};
</script>

<style>
.content {
  min-height: calc(100vh - 330px);
}
.responsive-div {
  padding-left: 2.75em;
}

@media (max-width: 420px) and (min-width: 320px) {
  .responsive-div {
    padding-left: 0;
    padding-top: 2.75em;
  }
}

@media (max-width: 420px) and (min-width: 320px) {
  .responsive-flex {
    flex-direction: column;
  }
}
</style>
