<template>
  <div>
    <router-link
      to="/news313"
      class="flex gap-4 ms:gap-[25px] lg:gap-[30px] group transition duration-300"
    >
      <div
        class="relative max-w-[180px] ms:max-w-[212px] max-h-[152px] flex-shrink-0"
      >
        <img
          src="@/assets/fake-images/founder.png"
          alt="images"
          class="w-full h-full rounded-[15px] object-cover"
        />
        <div
          class="absolute bottom-[12px] right-[15px] py-1 px-4 text-sm text-[#252641] bg-[#F4C467] rounded-[61px]"
        >
          Ishga qabul
        </div>
      </div>
      <div class="font-['Poppins'] transition duration-300">
        <p
          class="font-medium leading-[29.99px] text-white group-hover:!text-[#7F43FF] line-clamp-2"
        >
          UA Technologiesda junior, middle UI/UX dizayner bo’lish imkoniyati
          bor!
        </p>
        <p
          class="text-[#BABABA] leading-[27.26px] text-sm sm:text-[15px] mt-1 ms:mt-3 line-clamp-2 group-hover:!text-[#7F43FF]"
        >
          O’z qilgan ishlaringiz va dizaynlaringizni maxsus link orqali
          jo’nating va...
        </p>
      </div>
    </router-link>
  </div>
</template>
