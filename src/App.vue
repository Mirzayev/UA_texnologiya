<template>
  <div
    class="bg-[#010108] h-full overflow-hidden min-h-[100vh] flex flex-col justify-between"
  >
    <div>
      <Header />
      <SLoading v-if="isLoading" />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/SHeader.vue";
import Footer from "@/components/SFooter.vue";
import { onMounted, ref } from "vue";
import SLoading from "@/components/SLoading.vue";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>
