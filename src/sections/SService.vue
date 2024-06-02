<template>
  <div class="bg-[#0F0A2B] py-[40px] ms:py-[55px]">
    <div class="container">
      <div class="text-center pt-[10px]">
        <p class="text-white inline flex-shrink-0 leading-[19.36px]">
          <span class="text-[#7F43FF] font-[400]"
            >01 <span class="px-1 pr-2 font-bold">|</span> </span
          >{{ $t("our_services") }}
        </p>
      </div>
      <p
        class="font-['HuboSans'] leading-[34.81px] text-white font-semibold text-[28px] sm:text-[32px] text-center mt-6 sm:mt-8 max-w-[571px] mx-auto"
      >
        Xizmatlarimiz bilan keyingi pog‘onaga chiqing!
      </p>
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-8">
          <ServiceCard class="" v-for="i in 6" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from "@/components/card/ServiceCard.vue";
</script>
