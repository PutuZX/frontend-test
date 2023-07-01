<template>
  <div id="header-wrapper" class="pt-12 pb-24">
    <div id="header-text" class="space-y-2">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3>Everything you need to manage your messaging</h3>
    </div>
    <div class="flex items-center justify-center pt-6">
      <input class="border border p-4 w-[600px] focus:outline-none rounded-l-md" placeholder="Search for answers" />

      <div class="bg-[#03A84E] p-4 border-[#03A84E] border rounded-r-md w-[65px] text-center cursor-pointer">
		<i class="fa fa-search fa-lg text-white"></i>
	  </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue"

export default {
	setup(){
		const test = reactive("test");
		console.log(test);

		return{
			test
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

#header-wrapper {
  height: 330px; /* replace this with your actual header height */
}

#header-text {
  text-align: center;
  font-family: $font-family;
  color: $text-black;
  padding: 20px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
