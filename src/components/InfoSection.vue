<template>
  <div class="flex items-center gap-3">
    <img :src="getImageUrl(icon)" alt="icon" />
    <div class="text-[#C6C6C6] text-sm leading-[16.94px]">
      <p v-if="title">{{ title }}</p>
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  info: string;
  icon: string;
  title?: string;
}
defineProps<Props>();

function getImageUrl(name: string) {
  return new URL(`../assets/icon/footer/${name}.svg`, import.meta.url).href;
}
</script>
