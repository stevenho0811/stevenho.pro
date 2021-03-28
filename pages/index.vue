<template>
  <div class="h-screen text-white w-full lg:w-3/4 xl:w-1/2 mx-auto">
    <div class="grid place-content-center h-full w-full px-8 lg:px-0">
      <Logo
        ref="logo"
        class="w-20 h-20 lg:w-28 lg:h-28 mb-8 mx-auto lg:mx-0 invisible"
      />
      <div class="leading-normal text-center lg:text-left">
        <div class="overflow-hidden">
          <h1
            ref="name"
            class="font-black text-4xl lg:text-8xl tracking-wide uppercase transform-gpu translate-y-full invisible"
          >
            Steven Ho
          </h1>
        </div>

        <div class="overflow-hidden">
          <h2
            ref="title"
            class="font-bold transform-gpu translate-y-full invisible pt-2"
          >
            Web Developer
          </h2>
        </div>
        <p ref="description" class="my-6 invisible">
          Use Nuxt.js(Vue) and other Javascript framework to build Modern
          Website, extra skill includes JS backend with MongoDB, UI/UX Design.
        </p>

        <div
          ref="contact"
          class="text-blue-600 text-base grid auto-rows-max gap-2 invisible"
        >
          <a
            class="hover:text-blue-400 transition-colors"
            href="mailto:hi@stevenho.pro"
            >hi@stevenho.pro</a
          >
          <a
            class="hover:text-blue-400 transition-colors"
            href="tel:+886908930811"
            >+886-908-930-811</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from '@gsap/shockingly'
import Logo from '~/assets/svg/logo.svg?inline'

export default {
  components: {
    Logo,
  },
  mounted() {
    const timeline = gsap.timeline({
      defaults: {
        ease: 'expo',
        duration: 0.75,
      },
    })

    timeline
      .to(this.$refs.logo, {
        autoAlpha: 1,
      })
      .to([this.$refs.name, this.$refs.title], {
        stagger: 1,
        yPercent: -100,
        autoAlpha: 1,
      })
      .to([this.$refs.description, this.$refs.contact], {
        stagger: 1,
        autoAlpha: 1,
      })
  },
}
</script>
