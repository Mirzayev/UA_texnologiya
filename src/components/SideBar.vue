<template>
  <Teleport to="body">
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed w-full h-[100vh] inset-y-0 z-[99999] duration-300 right-0 bg-black z-[9999]"
    >
      <i
        @click="emit('closeSidebar', false)"
        class="fa-sharp fa-solid fa-xmark text-white text-2xl top-10 right-10 absolute"
      ></i>
      <div class="text-center gap-6 text-lg text-white mt-[230px]">
        <a
          href="#main-section"
          @click="emit('closeSidebar', false)"
          class="font-medium mt-6 inline-block leading-[16.94px] transition duration-300 border-b pb-2 hover:text-[#0469FF] hover:border-[#0469FF]"
        >
          {{ $t("main") }}
        </a>
        <div>
          <a
            href="#about-section"
            @click="emit('closeSidebar', false)"
            class="font-medium mt-6 inline-block leading-[16.94px] transition duration-300 hover:text-[#0469FF] hover:border-[#0469FF] transition duration-300 border-b pb-2"
          >
            {{ $t("about") }}
          </a>
        </div>

        <div>
          <a
            href="#service-section"
            @click="emit('closeSidebar', false)"
            class="font-medium mt-6 inline-block leading-[16.94px] transition duration-300 hover:text-[#0469FF] transition duration-300 border-b pb-2 hover:border-[#0469FF]"
          >
            {{ $t("service") }}
          </a>
        </div>
        <a
          href="#blog-section"
          @click="emit('closeSidebar', false)"
          class="font-medium mt-6 inline-block leading-[16.94px] transition duration-300 hover:text-[#0469FF] transition duration-300 border-b pb-2 hover:border-[#0469FF]"
        >
          {{ $t("blog") }}
        </a>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits(["closeSidebar"]);
</script>
