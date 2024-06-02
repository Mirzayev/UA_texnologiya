<template>
  <div class="container pb-[80px] ms:pb-[120px] sm:pb-[158px]">
    <div
      class="flex flex-col md:flex-row gap-8 dm:gap-10 justify-between items-center"
    >
      <div class="img-shadow">
        <img
          src="@/assets/fake-images/founder.png"
          alt="images"
          class="rounded-[34px] max-h-[330px] w-full"
        />
      </div>
      <div class="mt-[30px] md:mt-0">
        <div>
          <div class="flex gap-3 items-center">
            <img src="@/assets/icon/done.svg" alt="done icon" />
            <p
              class="text-[#C6C6C6] font-[400] leading-[24.2px] text-sm md:text-base dm:text-lg lg:text-xl"
            >
              Texnik mukammalik bizda doim birinchi o‘rinda turadi
            </p>
          </div>
          <div class="flex gap-3 items-center mt-3">
            <img src="@/assets/icon/done.svg" alt="done icon" />
            <p
              class="text-[#C6C6C6] font-[400] leading-[24.2px] text-sm md:text-base dm:text-lg lg:text-xl"
            >
              Har qanday loyiha uchun yechimlarni taklif qila olamiz
            </p>
          </div>
          <div class="flex gap-3 items-center mt-3">
            <img src="@/assets/icon/done.svg" alt="done icon" />
            <p
              class="text-[#C6C6C6] font-[400] leading-[24.2px] text-sm md:text-base dm:text-lg lg:text-xl"
            >
              Biznesingiz o’sish jarayoni biz bilan tezlashadi
            </p>
          </div>
        </div>
        <div
          class="mt-[50px] md:mt-[70px] dm:mt-[100px] lg:mt-[160px] flex items-center"
        >
          <div
            class="text-sm md:text-base dm:text-lg lg:text-xl leading-[24.2px] font-[400] max-w-[200px]"
          >
            <p class="text-[#FDF001]">Aziz Hamidov</p>
            <p class="text-[#C6C6C6] mt-1 md:mt-2">
              UA Technologies ta’sischisi
            </p>
          </div>
          <div>
            <img src="@/assets/static/imzo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-shadow {
  box-shadow: 15px 18px 72px 0px #fdf00199;
  border-radius: 34px;
}
</style>
