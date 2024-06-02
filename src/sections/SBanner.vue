<template>
  <div class="relative">
    <div class="container relative z-[20]">
      <div class="mt-[100px] dm:mt-[120px]">
        <p
          class="text-white text-[40px] sm:text-[65px] dm:text-[75px] font-semibold leading-130 sm:leading-[72.53px] text-center font-hubo"
        >
          Betakror raqamli <span class="gradient-text">yechimlarni</span>
          taklif qilamiz!
        </p>
        <SButton
          custom-class="!max-w-[200px] mx-auto"
          class="mt-[50px] dm:mt-[70px]"
          @click="openModal = true"
        >
          {{ $t("connect") }}
        </SButton>

        <div
          class="mt-[77px] box-shadow mx-[20px] dm:mx-0 px-[20px] sm:px-[40px] dm:px-[52px] py-[25px] sm:py-[40px] dm:py-[48px] rounded-[15px]"
        >
          <p
            class="text-[#C6C6C6] text-center text-sm sm:text-base leading-[19.36px] font-[400]"
          >
            Bizning xizmatlarimiz va loyihangiz bo'yicha yechimlarimiz
            biznesingiz uchun cheksiz imkoniyatlar yaratadi va har qanday
            g'oyalaringizni ilgari surishingiz uchun zaminlikni ta'minlaydi!
          </p>
        </div>
        <div class="flex justify-center mt-[80px] ms:mt-[100px] dm:mt-[133px]">
          <a
            href="#blog-section"
            class="text-center cursor-pointer transition duration-300 group"
          >
            <p
              class="text-[#C6C6C6] group-hover:text-[#341289] text-sm sm:text-base transition duration-300"
            >
              {{ $t("more") }}
            </p>
            <img
              src="@/assets/icon/down-arrow.svg"
              alt="images"
              class="mx-auto mt-1"
            />
          </a>
        </div>
      </div>
    </div>
    <img
      src="@/assets/static/elleps1.png"
      alt="circle"
      class="absolute top-[-500px] z-1 left-[-20px] w-[936px] h-[936px]"
    />
    <img
      src="@/assets/static/elleps2.png"
      alt="circle"
      class="absolute top-[-250px] right-0 w-[590px] h-[590px]"
    />
    <SModal :is-open="openModal" @closeModal="(e) => (openModal = e)" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SButton from "@/components/SButton.vue";
import SModal from "@/components/modal/SModal.vue";
const openModal = ref(false);
</script>

<style scoped>
.gradient-text {
  background-image: linear-gradient(265.79deg, #341289 -16.8%, #9949ff 89.61%);
  background-clip: text;
  -webkit-background-clip: text; /* Safari/Chrome */
  color: transparent;
}

.box-shadow {
  box-shadow: 0px -21px 30px 0px #7f43ff99;
  background: linear-gradient(180deg, #1b0f4e 0%, rgba(27, 15, 78, 0) 100%);
}

.font-hubo {
  font-family: "HuboSans";
}
</style>
