<template>
  <div v-for="article in articles" :key="article.id">
    <div v-if="article.status == 'published'">
      <div
        class="flex bg-white rounded-md border p-4 pl-10 pr-10 items-center mb-4 justify-between"
      >
        <div class="flex items-center">
          <div v-if="article.icon == 'wpforms'">
            <wpformsIcon :size="25" color="#03A84E" />
          </div>
          <div v-else style="font-size: 20px">
            <div
              class="fa text-[#03A84E] fa-md"
              :class="`fa-${article.icon}`"
            ></div>
          </div>
          <div class="flex flex-col pl-8">
            <div class="text-xl">{{ article.title }}</div>
            <div class="text-xs text-[#9C9AA6]">
              {{ articleDate(article.updatedOn) }}
            </div>
          </div>
        </div>

        <div
          class="flex items-center fa fa-angle-right fa-2x text-[#03A84E]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import wpformsIcon from "./icon/wpformsIcon.vue";
import { useArticles } from "../store";
import { format } from "date-fns";
export default {
  setup() {
    const store = useArticles();

    function articleDate(date) {
      return "Updated " + format(new Date(date), "MMMM, d yyyy");
    }

    return {
      articles: store.articles,
      articleDate,
    };
  },
  components: {
    wpformsIcon,
  },
};
</script>
