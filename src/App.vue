<template>
  <div v-if="!notFound">
    <tawk-header></tawk-header>
  </div>
  <Suspense>
    <template #default>
      <router-view />
    </template>
  </Suspense>
</template>

<script>
import { ref, watchEffect, Suspense } from "vue";
import Header from "./components/Header.vue";
import router from "./router/index"; // assuming your router file is in the location './router/index'

export default {
  components: {
    "tawk-header": Header,
    Suspense,
  },
  setup() {
    const notFound = ref(false);

    watchEffect(() => {
      notFound.value = router.currentRoute.value.name === "Not Found";
    });

    return { notFound };
  },
};
</script>

<style lang="scss" scoped>
@import "scss/main.scss";
</style>
