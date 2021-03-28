<template>
  <div class="h-screen text-white w-full lg:w-1/2 mx-auto">
    <div class="grid place-content-center h-full w-full px-12">
      <Logo class="w-28 h-28 mb-12" />
      <h1 class="font-black text-8xl tracking-wide uppercase leading-normal">
        Steven Ho
      </h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline'
export default {
  components: {
    Logo,
  },
}
</script>
