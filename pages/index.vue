<template>
  <div
    ref="container"
    class="h-screen text-white w-full mx-auto bg-black"
    style="clip-path: circle(0% at center center)"
  >
    <div
      class="
        grid
        place-content-center
        h-full
        px-8
        lg:px-0
        w-full
        lg:w-3/4
        xl:w-1/2
        mx-auto
      "
    >
      <Logo
        ref="logo"
        class="w-20 h-20 lg:w-28 lg:h-28 mb-8 mx-auto lg:mx-0 invisible"
      />
      <div class="leading-normal text-center lg:text-left">
        <div class="overflow-hidden">
          <h1
            ref="name"
            class="
              font-black
              text-5xl
              lg:text-8xl
              tracking-wide
              uppercase
              transform-gpu
              translate-y-full
              invisible
            "
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
          Use Nuxt.js(Vue) and React or another Javascript framework to build
          Modern Website, extra skill includes JS backend with MongoDB, UI/UX
          Design.
        </p>

        <div ref="contact" class="text-base grid auto-rows-max invisible">
          <a
            class="text-blue-500 hover:text-blue-300 transition-colors"
            href="mailto:hi@stevenho.pro"
            >hi@stevenho.pro</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from '@gsap/shockingly'
import { CustomEase } from '@gsap/shockingly/CustomEase'
import Logo from '~/assets/svg/logo.svg?inline'

export default {
  components: {
    Logo,
  },
  mounted() {
    gsap.registerPlugin(CustomEase)
    const ease = CustomEase.create('custom', '0.70, 0, 0.30, 1')

    const timeline = gsap.timeline({
      delay: 1,
      defaults: {
        ease,
        duration: 0.75,
      },
    })

    timeline
      .to(this.$refs.container, {
        duration: 1,
        clipPath: 'circle(100% at center center)',
        clearProps: 'clipPath',
      })
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
