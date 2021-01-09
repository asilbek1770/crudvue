<template>
    <v-app>
      <axios > </axios>
    <transition name="route" mode="out-in">
      <router-view>
      </router-view>
    </transition>
    </v-app>
</template>

<script>
import Axios from "@/components/axios";
export default {
  name: 'App',
  components: {Axios}
}
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to{
  opacity: 1;
  transform: translateY(30px);
}
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}




</style>