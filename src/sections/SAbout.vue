<template>
  <div class="relative bg-[#010108] pt-2 mt-6 sm:mt-8">
    <div class="container">
      <div class="flex gap-4 items-center">
        <p class="text-white inline flex-shrink-0 leading-[19.36px]">
          <span class="text-[#7F43FF] font-[400]"
            >01 <span class="px-1 pr-2 font-bold">|</span> </span
          >{{ $t("about") }}
        </p>
        <div class="w-full h-[1px] linear"></div>
      </div>
      <div class="mt-[30px] grid grid-cols-5">
        <div class="col-span-5 md:col-span-3">
          <div class="flex flex-col ms:flex-row gap-5 md:gap-7 items-center">
            <div
              class="flex-shrink-0 w-[67px] h-[67px] rounded-[50%] gradient flex justify-center items-center"
            >
              <img
                src="@/assets/icon/clarity_blocks-group-line.png"
                alt="about icon"
              />
            </div>
            <div class="text-white text-center ms:text-left">
              <p
                class="font-medium leading-[29.05px] text-base ms:text-lg md:text-xl dm:text-2xl"
              >
                UA TECHNOLOGIES innovatsion va zamonaviy dasturiy mahsulotlarni
                yaratish va raqamli texnologiyalar doirasida zarur bo‘lgan
                barcha zaruriy mahsulot operatsiyalari, loyihalash, ishlab
                chiqish, sinovdan o‘tkazish va uzluksiz yetkazib berish
                xizmatlarini taqdim etadi.
              </p>
              <p
                class="mt-4 md:mt-[18px] text-[#C6C6C6] text-sm ms:text-base md:text-lg dm:text-xl leading-[24.02px]"
              >
                Mijozlarning ehtiyojlarini qondirish va mijozlarimizga uzluksiz
                sifatli mahsulotlarni taqdim etish bo'yicha harakatlarimiz va
                majburiyatimiz ularning ishonchini qozonishimizga yordam beradi.
              </p>
            </div>
          </div>
        </div>
        <div class="hidden md:block col-span-2">
          <img
            src="@/assets/static/about-logo.png"
            alt="logo"
            class="absolute right-0 top-[-120px]"
          />
        </div>
      </div>
    </div>
    <SFounder class="!mt-[110px] ms:!mt-[160px]" />
  </div>
</template>
<script setup lang="ts">
import SFounder from "@/sections/SFounder.vue";
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
  box-shadow: 0 0 30px 0 #7f43ff, inset 0 0 4px 0 #ffffff;
  background: #551c98;
}
</style>
