<template>
  <div class="relative">
    <div class="container">
      <div class="text-center mt-[60px] ms:mt-[92px]">
        <p class="text-white inline flex-shrink-0 leading-[19.36px]">
          <span class="text-[#7F43FF] font-[400]"
            >02 <span class="px-1 pr-2 font-bold">|</span> </span
          >{{ $t("blog") }}
        </p>
        <div
          class="mt-[25px] ms:mt-[34px] text-center text-white font-['HuboSans'] max-w-[626px] mx-auto"
        >
          <p
            class="leading-[38px] ms:leading-[49.07px] text-[24px] sm:text-[27.26px] font-semibold"
          >
            Biz haqimizda so‘ngi yangiliklar
          </p>
          <p
            class="font-normal leading-[28px] mt-1 sm:leading-[32.71px] text-base sm:text-lg"
          >
            Bizdagi so’ngi o‘zgarishlar va yangiliklarni saytimiz yoki ijtimoiy
            tarmoqlarimiz orqali kuzatib boring
          </p>
        </div>
      </div>
      <div
        class="mt-[40px] sm:mt-[56px] flex flex-col md:grid md:grid-cols-12 gap-[50px] lg:gap-[90px]"
      >
        <div class="md:col-span-5 dm:col-span-6">
          <img
            src="@/assets/fake-images/founder.png"
            alt="images"
            class="w-full max-h-[258px] rounded-[15px] object-cover"
          />
          <div class="flex mt-[25px] ms:mt-[30px]">
            <div
              class="py-1 px-4 text-sm text-[#252641] bg-[#F4C467] rounded-[61px]"
            >
              Yangilik
            </div>
          </div>
          <div class="mt-4">
            <p
              class="text-white leading-[35.44px] text-lg ms:text-xl font-medium font-['Poppins']"
            >
              UA Technologiesda biznesni avtomatlashtirish bo’yicha maxsus
              masterklas bo’lib o’tdi
            </p>
            <p
              class="mt-2 ms:mt-4 text-sm ms:text-[15px] text-[#BABABA] leading-[27.26px] font-['Poppins']"
            >
              Masterklassda kompaniya hodimlari uchun maxsus mehmon tomonidan
              yangi bilim va ko’nikmalar berildi.
            </p>
            <router-link
              to="/news1"
              class="text-[#696984] mt-3 sm:mt-4 inline-block text-sm leading-[27.26px] font-['Poppins'] border-b transition duration-300 hover:text-[#fff]"
              >Batafsil</router-link
            >
          </div>
        </div>
        <div
          class="md:col-span-7 dm:col-span-6 flex flex-col gap-8 md:gap-6 lg:gap-8"
        >
          <BlockCard v-for="i in 3" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BlockCard from "@/components/card/BlockCard.vue";
</script>
