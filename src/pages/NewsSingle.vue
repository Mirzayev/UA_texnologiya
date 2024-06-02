<template>
  <div class="relative pb-[230px]">
    <div
      class="container pt-[30px] sm:pt-[40px] md:pt-[50px] pb-[45px] sm:pb-[65px] md:pb-[80px] relative z-[20]"
    >
      <div class="text-[#C2B7BD]">Asosiy / {{ route.params.id }}</div>
      <div class="max-h-[480px] h-full mt-5">
        <img
          src="@/assets/fake-images/founder.png"
          alt="news images"
          class="w-full h-full object-cover rounded-[15px] max-h-[480px] h-full"
        />
      </div>
      <div class="mt-6 ms:mt-10">
        <p
          class="text-white font-[800] text-2xl dm:text-[30px] leading-[40.3px]"
        >
          Endi biz 100dan ortiqmiz!
        </p>
        <p class="mt-1 ms:mt-4 text-sm ms:text-base text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>

        <p class="text-white mt-4 text-sm ms:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p class="text-white mt-4 text-sm ms:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem IpsumLorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
      </div>
    </div>
    <div class="bg-[#0F0A2B] pt-[25px] pb-[30px] ms:py-[46px]">
      <div class="container">
        <p
          class="text-white font-bold text-2xl ms:text-3xl md:text-4xl leading-[44.78px]"
        >
          Boshqa yangiliklar
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 mt-[20px] ms:mt-[30px] md:mt-[40px] gap-x-[70px] gap-y-[22px]"
        >
          <BlockCard v-for="(item, index) in 4" :key="index" />
        </div>
      </div>
    </div>
    <div class="absolute top-[-100px] z-1 left-[-10px]">
      <img
        src="@/assets/static/singleElleps1.png"
        alt="single images"
        class="w-[936px] h-[936px]"
      />
    </div>
    <div class="absolute top-[400px] right-[20px]">
      <img
        src="@/assets/static/singleElleps2.png"
        alt="images"
        class="w-[984px] h-[984px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BlockCard from "@/components/card/BlockCard.vue";

const route = useRoute();
</script>
