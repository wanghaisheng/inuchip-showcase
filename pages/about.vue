<template>
  <div class="mt-16 sm:mt-24 flex flex-col items-center">
    <h1 class="text-4xl">About</h1>
    <p class="mt-8 px-4 text-xl max-w-screen-md text-center">
      Made with Inuitive is made to showcase all the project that uses
      <span> Inuitive </span> as their preferred <span>3D vision </span>,
      <span> NU4000 Chips </span> or <span> C158 modules</span>.From robotics to VR/AR
	  <span>	 </span>
    </p>
    <br />
    <br />
    <h2 class="text-2xl">Tech Stack:</h2>
    <div class="mt-4">
      <a
        target="_blank"
        href="https://v3.nuxtjs.org/"
        rel="noopener"
        class="text-sm rounded-md bg-dark-400 mr-2 mb-2 px-4 py-2"
        >全球前沿的芯片上3D深度感知引擎，极大提升3D深度性能</a
      >
      <a
        target="_blank"
        href="https://vitejs.dev/"
        rel="noopener"
        class="text-sm rounded-md bg-dark-400 mr-2 mb-2 px-4 py-2"
        >高度集成：集成3D深度、SLAM实时定位建图引擎、及人工智能于一体，单芯片即可实现多颗芯片功能</a
      >
      <a
        target="_blank"
        href="https://windicss.org/"
        rel="noopener"
        class="text-sm rounded-md bg-dark-400 mr-2 mb-2 px-4 py-2"
        >超低功耗：0.5w即可实现5-6 TOPS算力，轻易满足设备端功耗要求</a
      >
      <a
        target="_blank"
        href="https://supabase.com/"
        rel="noopener"
        class="text-sm rounded-md bg-dark-400 mr-2 mb-2 px-4 py-2"
        >实时高精度姿态跟踪</a
      >
      <a
        target="_blank"
        href="https://vercel.com/"
        rel="noopener"
        class="text-sm rounded-md bg-dark-400 mr-2 mb-2 px-4 py-2"
        > 3D性能、成本、功耗的优化组合，已与全球3D应用龙头企业合作，大量推广3D视觉双目方案</a
      >
    </div>

    <div class="mt-12">
      <router-link
        class="px-6 py-3 rounded-lg bg-dark-400 hover:bg-dark-500 transition"
        to="contact"
      >
        Contact
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
definePageMeta({
  layout: "plain",
})
</script>

<style scoped>
span {
  @apply text-green-400;
}
</style>
