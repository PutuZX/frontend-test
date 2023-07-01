<template>
  <div class="content bg-[#FAFAFA] flex items-center justify-center p-12">
    {{ pageData.id }}
    {{ pageData.title }}
    {{ pageData.description }}
    {{ pageData.createdOn }}
    {{ pageData.updatedOn }}
    {{ pageData.enabled }}
    {{ pageData.order }}
    {{ pageData.icon }}
    {{ pageData.totalArticle }}
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useCards } from "../store";
import { watchEffect, ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const store = useCards();
    console.log(route.path);
    const currentRoute = route?.path;
    let pageData = ref({});

    watchEffect(() => {
      if (store.cards.length > 0) {
        routeData(currentRoute);
      }
    });

    function routeData(currentRoute) {
      console.log(currentRoute);
      switch (currentRoute) {
        case "/getting-started":
          return (pageData.value = store.cards.find(
            (card) => card.icon == "play"
          ));
        case "/chat-widget-customization":
          return (pageData.value = store.cards.find(
            (card) => card.icon == "comment"
          ));
        case "/using-the-dashboard":
          return (pageData.value = store.cards.find(
            (card) => card.icon == "deskop"
          ));
        case "/integrations":
          return (pageData.value = store.cards.find(
            (card) => card.icon == "link"
          ));
        case "/advanced-features":
          return (pageData.value = store.cards.find(
            (card) => card.icon == "gem"
          ));
        case "/ecommerce-integrations":
          return (pageData.value = store.cards.find(
            (card) => card.icon == "shopping-cart"
          ));
      }
    }
    console.log(pageData);

    return {
      pageData: pageData.value,
      currentRoute,
      route,
      routeData,
    };
  },
};
</script>

<style>
.content {
  min-height: calc(100vh - 330px);
}
</style>
