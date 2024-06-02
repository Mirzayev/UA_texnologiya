<template>
  <div class="relative">
    <div class="mx-auto flex justify-center">
      <div
        class="absolute top-[-170px] max-w-[1440px] py-[25px] xs:py-[35px] sm:py-[60px] mx-4 dm:py-[70px] px-4 xs:px-[20px] sm:px-[40px] dm:px-[50px] bg-white rounded-[25px] connect-box"
      >
        <p
          class="font-medium sm:font-semibold text-lg xs:text-xl sm:!text-2xl dm:text-[32px] max-w-[866px] text-center text-white leading-[30px] sm:leading-[36px] dm:leading-[48.79px]"
        >
          Biznesingizni biz bilan kengaytiring Biz xizmat ko‘rsatishdan doim
          mamnunmiz!
        </p>
        <div class="max-w-[150px] ms:max-w-[202px] mx-auto mt-6 ms:mt-8">
          <SButton custom-class="!rounded-[10px]" @click="openModal = true">{{
            $t("connect")
          }}</SButton>
        </div>
      </div>
    </div>
    <div class="bg-[#130E29] w-full">
      <div
        class="container pt-[100px] sm:pt-[140px] md:pt-[150px] dm:pt-[200px] pb-[30px]"
      >
        <div class="grid grid-cols-5 text-white gap-10">
          <div class="col-span-5 lg:!col-span-2 dm:col-span-1">
            <img src="../assets/static/logo.png" alt="logo" class="w-[273px]" />
            <div class="mt-7 dm:mt-9 flex items-center gap-6">
              <SocialBox
                v-for="(item, i) in socialLinks"
                :key="i"
                :icon="item.icon"
                :link="item.link"
              />
            </div>
          </div>

          <div class="col-span-5 lg:!col-span-3 dm:col-span-4">
            <div
              class="grid grid-cols-4 sm:flex sm:justify-between w-full gap-5 sm:gap-7"
            >
              <div class="text-white col-span-4 sm:basis-[296px]">
                <p class="leading-[19.36px] font-semibold">{{ $t("about") }}</p>
                <p
                  class="mt-[15px] text-xs leading-[14.52px] font-[300] text-[#C6C6C6]"
                >
                  Innovatsion va zamonaviy dasturiy mahsulotlarni yaratish va
                  raqamli texnologiyalar doirasida zarur bo‘lgan barcha zaruriy
                  mahsulot operatsiyalari, loyihalash, ishlab chiqish, sinovdan
                  o‘tkazish va uzluksiz yetkazib berish xizmatlarini taqdim
                  etamiz.
                </p>
                <div class="mt-[25px]">
                  <InfoSection
                    icon="clock"
                    info="Dushanba-Juma 9:00-17:00"
                    title="Ish soatlari"
                  />
                  <InfoSection
                    icon="support"
                    info="24/7 365"
                    title="Biz bilan bog'laning"
                    class="mt-4"
                  />
                </div>
              </div>
              <div
                class="mt-2 sm:mt-0 col-span-4 ms:col-span-2 sm:flex-shrink-0"
              >
                <p class="leading-[19.36px] font-semibold">
                  {{ $t("connect") }}
                </p>
                <InfoSection
                  icon="email"
                  info="info@autechnologies.com"
                  class="mt-[15px]"
                />
                <InfoSection
                  icon="phone"
                  info="998-99-9990099"
                  class="mt-[15px]"
                />
              </div>
              <div
                class="mt-2 sm:mt-0 col-span-4 ms:col-span-2 sm:flex-shrink-0"
              >
                <p class="leading-[19.36px] font-semibold">
                  {{ $t("our_services") }}
                </p>
                <div class="">
                  <p
                    v-for="(item, index) in services"
                    :key="index"
                    class="mt-[15px] text-[#C6C6C6] leading-[16.94px] text-sm"
                  >
                    {{ item?.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#191333] w-full">
      <div class="container text-center">
        <p class="text-[#C6C6C6] font-[400] text-sm pt-[14px] pb-[24px]">
          © 2023 AU Technologies. Barcha huquqlar himoyalangan
        </p>
      </div>
    </div>
    <SModal :is-open="openModal" @closeModal="(e) => (openModal = e)" />
  </div>
</template>

<script setup lang="ts">
import SButton from "@/components/SButton.vue";
import InfoSection from "@/components/InfoSection.vue";
import SocialBox from "@/components/SocialBox.vue";
import SModal from "@/components/modal/SModal.vue";
import { ref } from "vue";
const openModal = ref(false);
const socialLinks = [
  {
    link: "#",
    icon: "instagram",
  },
  {
    link: "#",
    icon: "telegram",
  },
  {
    link: "#",
    icon: "twitter",
  },
];
const services = [
  {
    name: "Veb-sayt ",
  },
  {
    name: "Logo va Brending ",
  },
  {
    name: "CRM tizimlar",
  },
  {
    name: "CRM tizimlar ",
  },
  {
    name: "Mobil ilovalar",
  },
  {
    name: "Veb-sayt ",
  },
];
</script>

<style scoped>
.connect-box {
  background: linear-gradient(261.54deg, #a69f29 -183.02%, #25166f 78.94%);
}
</style>
