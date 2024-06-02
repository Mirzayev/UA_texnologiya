<template>
  <a :href="link" target="_blank" class="cursor-pointer">
    <img
      :src="getImageUrl(icon)"
      alt="social icon"
      class="social-icon w-[24px] h-[24px]"
    />
  </a>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  link: string;
}

defineProps<Props>();
function getImageUrl(name: string) {
  return new URL(`../assets/icon/footer/${name}.svg`, import.meta.url).href;
}
</script>

<style>
.social-icon {
  transition: all 0.4s;
}
.social-icon:hover {
  transform: scale(1.1) rotate(360deg);
}
</style>
