<template>
  <div class="container">
    <h3
      class="text-white font-['HuboSans'] font-semibold text-[26px] ms:text-[36px] md:text-[50px] dm:text-[64px] mt-[80px] ms:mt-[160px] md:mt-[200px] dm:mt-[249px]"
    >
      Biz bilan bog‘laning!
    </h3>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-[28px] dm:gap-[35px] lg:gap-[47px] mt-[20px] ms:mt-[30px] md:mt-[48px] dm:mt-[55px]"
    >
      <div class="flex flex-col gap-3">
        <SInput v-model="form.fullName" placeholder="Ism Familiya">
          <template #prefix>
            <img
              src="@/assets/icon/form/user.svg"
              alt="icon"
              class="mr-2 ms:mr-4 w-[25px] ms:w-[30px]"
            />
          </template>
        </SInput>
        <SInput v-model="form.email" placeholder="Elektron manzil">
          <template #prefix>
            <img
              src="@/assets/icon/form/email.svg"
              alt="icon"
              class="mr-2 ms:mr-4 w-[25px] ms:w-[30px]"
            />
          </template>
        </SInput>
        <SInput v-model="form.phone" placeholder="Telefen raqam" type="phone">
          <template #prefix>
            <img
              src="@/assets/icon/form/phone.svg"
              alt="icon"
              class="mr-2 ms:mr-4 w-[25px] ms:w-[30px]"
            />
          </template>
        </SInput>
        <STextarea
          v-model="form.message"
          placeholder="Qisqacha loyihangiz haqida yozing"
          maxlength="1000"
        >
          <template #prefix>
            <img
              src="@/assets/icon/form/chat.svg"
              alt="icon"
              class="mr-2 ms:mr-4 w-[25px] ms:w-[30px]"
            />
          </template>
        </STextarea>
        <div class="flex">
          <SButton class="!bg-[#241570] text-white hover:!bg-[#1A1050]"
            >Jo'natish</SButton
          >
        </div>
      </div>
      <div class="relative">
        <img
          src="@/assets/fake-images/contact.png"
          alt="images"
          class="h-[360px] sm:h-full w-full object-cover"
        />
        <div class="absolute top-[35%]">
          <p
            class="text-white leading-[30px] md:leading-[38.73px] font-medium text-xl ms:text-[24px] md:text-[28px] lg:text-[32px] text-center mx-[20px] lg:mx-[42px]"
          >
            "Biz mijozlarimizni bizneslarini raqamlashtirishda yordam berishga
            tayyormiz!"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SInput from "@/components/form/SInput.vue";
import { reactive } from "vue";
import STextarea from "@/components/form/STextarea.vue";
import SButton from "@/components/SButton.vue";

const form = reactive({
  fullName: "",
  email: "",
  phone: "",
  message: "",
});
</script>
