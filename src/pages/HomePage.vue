<template>
  <div>
    <SBanner id="main-section" />
    <SAbout id="about-section" />
    <SService id="service-section" />
    <SBlock id="blog-section" />
    <SClustomer id="customer-section" />
    <SContact class="!mb-[200px]" />
  </div>
</template>
<script setup lang="ts">
import SBanner from "@/sections/SBanner.vue";
import SAbout from "@/sections/SAbout.vue";
import SService from "@/sections/SService.vue";
import SBlock from "@/sections/SBlock.vue";
import SClustomer from "@/sections/SClustomer.vue";
import SContact from "@/sections/SContact.vue";
</script>
