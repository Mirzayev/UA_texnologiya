<template>
  <div
    class="cursor-pointer flex justify-center text-sm ms:text-base items-center py-3 ms:py-3 bg-[#FDF001] px-6 ms:px-8 rounded-[20px] font-bold text-black transition duration-300 hover:bg-[#FFD100] hover:text-white active:scale-[0.95]"
    :class="customClass"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  customClass?: string;
}

defineProps<Props>();
</script>
