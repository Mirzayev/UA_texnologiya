<template>
  <div class="relative rounded-[10px] bg-[#161E25] py-3 px-7">
    <div class="flex justify-center">
      <img
        :src="getImageUrl(data.images)"
        alt="images"
        class="w-[103px] h-[103px] absolute rounded-[50%] top-[-50px] object-cover"
      />
    </div>
    <div class="flex justify-center mt-[70px] ms:mt-[80px]">
      <div class="text-center max-w-[306px] mx-auto px-4">
        <img src="@/assets/icon/note.svg" alt="note svg" class="mx-auto" />
        <p
          class="mt-[20px] ms:mt-[22px] font-bold leading-[29.05px] text-lg ms:text-xl dm:text-2xl text-white"
        >
          {{ data?.idea }}
        </p>
        <p
          class="mt-4 ms:mt-[20px] ms:mt-[30px] font-bold leading-[24.2px] text-base ms:text-lg dm:text-xl text-[#C6C6C6]"
        >
          {{ data?.name }}
        </p>
        <p class="leading-[19.36px] text-sm ms:text-base text-[#C6C6C6]">
          {{ data?.position }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: {
    id: number;
    images: string;
    idea: string;
    name: string;
    position: string;
  };
}

defineProps<Props>();

function getImageUrl(name: string) {
  return new URL(`../../assets/fake-images/${name}`, import.meta.url).href;
}
</script>
