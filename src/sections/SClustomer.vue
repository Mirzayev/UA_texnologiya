<template>
  <div class="container pt-[100px] sm:pt-[140px]">
    <div class="flex gap-4 items-center">
      <p class="text-white inline flex-shrink-0 leading-[19.36px]">
        <span class="text-[#FDF001] font-[400]"
          >04 <span class="px-1 pr-2 font-bold">|</span> </span
        >{{ $t("customer_idea") }}
      </p>
      <div class="w-full h-[1px] linear"></div>
    </div>

    <div
      class="mt-[50px] flex flex-col ms:flex-row gap-5 md:gap-7 items-center"
    >
      <div
        class="flex-shrink-0 w-[67px] h-[67px] rounded-[50%] gradient flex justify-center items-center"
      >
        <img src="@/assets/icon/black_icon.png" alt="about icon" />
      </div>
      <div class="text-white text-center ms:text-left max-w-[650px]">
        <p
          class="font-semibold leading-[28px] ms:leading-[34.81px] text-xl ms:text-2xl md:text-2xl dm:text-4xl font-['HuboSans'] md:pr-[90px]"
        >
          Mijozlarimizning bizga nisbatan iliq fikrlari
        </p>
        <p
          class="mt-3 md:mt-4 md:mt-[18px] text-[#C6C6C6] text-sm ms:text-base md:text-lg dm:text-xl leading-[24.2px]"
        >
          Mijozlarimiz bizni natijalarimiz, samimiy xizmatimiz, sohaviy
          bilimimiz va loyihalarni o'z vaqtida yetkazib berishimizdan doim
          mamnun. Bu yerda ba’zi mijozlarimizning bizga nisbatan fikrlari:
        </p>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-[90px] md:!gap-[21px] mt-[150px] ms:mt-[218px]"
    >
      <CustomerCard
        v-for="(item, index) in customerData"
        :key="index"
        :data="item"
        class="ms:mx-[20px] md:!mx-[0px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomerCard from "@/components/card/CustomerCard.vue";
const customerData = [
  {
    id: 1,
    images: "customer.png",
    idea: "Top Jamoa! Natija super.",
    name: "Javohir K.",
    position: "Direktor",
  },
  {
    id: 2,
    images: "customer2.png",
    idea: "Shubhasiz barchaga tavsiya qilaman!",
    name: "Mavluda A.",
    position: "Bosh Menedjer",
  },
  {
    id: 3,
    images: "customer3.png",
    idea: "Rahmat! Jamoa ishlari juda yoqdi.",
    name: "Karimjon N.",
    position: "Menedjer",
  },
];
</script>

<style scoped>
.linear {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5) -1.52%,
    rgba(0, 0, 0, 0) 109.98%
  );
}
.gradient {
  box-shadow: 0px 0px 30px 0px #fdf001, inset 0px 0px 4px 0px #ffffff;
  background: #fdf001;
}
</style>
