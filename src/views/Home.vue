<template>
  <!-- <Header/> -->
  <div class="h-screen bg-[#FAFAFA] flex">
    <Monitor size="60" />
    <Play size="50" />
    <Message size="50" />
    <Gem size="50" />
    <Link size="50" />
    <Cart size="50" />
    

  </div>
</template>

<script>
import Monitor from "../components/icon/Monitor.vue";
import Play from "../components/icon/Play.vue";
import Message from "../components/icon/Message.vue";
import Gem from "../components/icon/Gem.vue";
import Cart from "../components/icon/Cart.vue";
import Link from "../components/icon/Link.vue";
export default {
  components: {
    Monitor,
    Play,
    Message,
    Gem,
    Cart,
    Link
  },
};
</script>
