<template>
  <div>
    <CustomMeta :title="'AI Chip Showcase | Made with Inuitive'" />

    <div class="mt-8 flex flex-col items-center">
      <h1 class="text-3xl md:text-4xl text-center">Made with Inuitive</h1>
	  Built in with SLAM+AI+3D engine 	  
	  <h2>Inuitive的芯片及模组已在全球范围内被深入应用在智能机器人、XR/3D交互、3D扫描、高端无人机等多个前沿3D视觉应用领域的龙头企业产品中。</h2>

	  
    </div>

    <Banner></Banner>

    <transition name="fade" mode="out-in">
      <div v-if="hero && hero.length" class="flex flex-col items-center">
        <HeroSlider :data="hero"></HeroSlider>

        <div class="mt-16 sm:mt-24">
          <h1 class="text-4xl text-center mb-4 sm:mb-8">Testimonial</h1>
          <div class="card-grid">
            <div v-for="item in testimonial" :key="item.id">
              <Card :item="item"></Card>
            </div>
          </div>
        </div>

        <Divider class="my-16 !bg-dark-700"></Divider>

        <div>
          <h1 ref="target" class="text-4xl text-center mb-4 sm:mb-8">
            Most Viewed “银牛3D机器视觉模组C158”基于银牛以色列子公司Inuitive的NU4000芯片以及模组设计，并针对中国市场进行了调优。
          </h1>
          <div v-if="latest" class="h-full relative">
            <div class="card-grid">
              <div v-for="item in latest" :key="item.id">
                <Card :item="item"></Card>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <div
                v-if="pending"
                class="absolute top-0 left-0 w-full h-full flex justify-center bg-dark-900"
              >
                <SVGCircle class="mt-48 animate-ping"></SVGCircle>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div v-else class="w-full h-screen flex items-center justify-center">
        <SVGCircle class="animate-ping"></SVGCircle>
      </div>
    </transition>

    <Pagination :count="itemCount" :target="target"></Pagination>
  </div>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()
let itemCount = useState("item-count", () => 0)
const page = computed(() => (route.query.page ? +route.query.page - 1 : 0))
const route = useRoute()
const [{ data: homeData }, { data: latest }] = await Promise.all([
  useLazyAsyncData("hero testimonial", () => $fetch("/api/project/home")),
  useLazyAsyncData("latest", async () => {
    const { data, count } = await $supabase
      .from("products_view")
      .select("*", { count: "exact" })
      .order("views", { ascending: false })
      .range(page.value * 12, page.value * 12 + 11)
    itemCount.value = count
    return data
  }),
])
const target = ref()
const hero = computed(() => homeData.value?.[0].data)
const testimonial = computed(() => homeData.value?.[1].data)
const pending = ref(false)
const fetchLatest = async () => {
  pending.value = true
  const { data, error, count } = await $supabase
    .from("products_view")
    .select("*", { count: "exact" })
    .order("views", { ascending: false })
    .range(+page.value * 12, +page.value * 12 + (12 - 1))
  if (data) {
    latest.value = data
  }
  pending.value = false
}
watch(
  () => route.query,
  (n) => {
    if (route.query.page) fetchLatest()
  },
  { immediate: true }
)
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
})
</script>