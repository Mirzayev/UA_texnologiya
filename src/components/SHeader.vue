<template>
  <div>
    <div class="container relative z-[20]">
      <SideBar
        :is-open="openSidebar"
        @closeSidebar="(e) => (openSidebar = e)"
      />

      <div class="flex justify-between items-center py-3 pt-8">
        <div
          class="block lg:hidden flex-shrink-0 text-white cursor-pointer"
          @click="openSidebar = true"
        >
          <i class="fa-solid fa-bars text-[20px] ms:text-[25px]"></i>
        </div>
        <router-link to="/" class="flex flex-shrink-0">
          <img
            src="../assets/static/logo.png"
            alt="logo"
            class="max-w-[250px] lg:max-w-[273px] w-full object-contain"
          />
        </router-link>
        <div
          class="items-center gap-[60px] text-white cursor-pointer hidden lg:flex"
        >
          <a
            href="#main-section"
            class="font-medium text-sm leading-[16.94px] transition duration-300 hover:text-[#0469FF]"
          >
            {{ $t("main") }}
          </a>
          <a
            href="#about-section"
            class="font-medium text-sm leading-[16.94px] transition duration-300 hover:text-[#0469FF]"
            >{{ $t("about") }}</a
          >
          <a
            href="#service-section"
            class="font-medium text-sm leading-[16.94px] transition duration-300 hover:text-[#0469FF]"
            >{{ $t("service") }}</a
          >
          <a
            href="#blog-section"
            class="font-medium text-sm leading-[16.94px] transition duration-300 hover:text-[#0469FF]"
            >{{ $t("blog") }}</a
          >
        </div>

        <div class="flex flex-shrink-0 items-center gap-3">
          <div
            class="relative group cursor-pointer text-white ms:py-3 ms:px-4 ms:border border-white rounded-[20px]"
          >
            <div @click="openLang" class="flex items-start gap-1">
              <img
                :src="getImageUrl(activeLang.value)"
                alt="lang svg"
                class="w-[30px] ms:w-auto"
              />
              <div class="hidden ms:flex items-center gap-3">
                <p class="">{{ activeLang?.label }}</p>
                <img
                  src="@/assets/icon/icon-chevron.svg"
                  alt="icon header"
                  class="transition duration-300"
                  :class="isOpen ? 'rotate-[180deg]' : ''"
                />
              </div>
            </div>

            <ul
              class="absolute top-full bg-white rounded-lg shadow-lg w-full left-[-60px] xs:left-[-55px] ms:left-0 min-w-[6rem] overflow-hidden"
              :class="isOpen ? 'block' : 'hidden'"
            >
              <li
                v-for="(item, i) in langs"
                :key="i"
                @click="changeLanguage(item)"
                class="flex gap-2 cursor-pointer hover:bg-gray-200 border-t py-2 px-3"
              >
                <img :src="getImageUrl(item.value)" alt="" />
                <p class="text-black">{{ item.label }}</p>
              </li>
            </ul>
          </div>
          <SButton
            class="w-[150px] hidden md:block text-center"
            @click="openModal = true"
            >{{ $t("connect") }}</SButton
          >
        </div>
      </div>
    </div>
    <SModal :is-open="openModal" @closeModal="(e) => (openModal = e)" />
  </div>
</template>

<script setup lang="ts">
import SButton from "@/components/SButton.vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import SideBar from "@/components/SideBar.vue";
import SModal from "@/components/modal/SModal.vue";

const { locale } = useI18n();

const openSidebar = ref(false);
const openModal = ref(false);

const langs = [
  {
    value: "uz",
    label: "O'zb",
  },
  {
    value: "ru",
    label: "Rus",
  },
];

const activeLang = ref({
  value: "uz",
  label: "O'zb",
});

const isOpen = ref(false);
function openLang() {
  isOpen.value = !isOpen.value;
}

function changeLanguage(item: { value: string; label: string }) {
  localStorage.setItem("locale", item.value);
  localStorage.setItem("langLabel", item.label);
  if (activeLang.value.value !== item.value) {
    window.location.reload();
  }
}

// window.addEventListener("click", (e) => {
//   isOpen.value = false;
// });

function getImageUrl(name: string) {
  return new URL(`../assets/icon/${name}.svg`, import.meta.url).href;
}

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "uz";
  activeLang.value.value = locale.value;
  activeLang.value.label = localStorage.getItem("langLabel") || "O'zb";
});
</script>
