<template>
  <div>
    <div class="bg-white flex items-center justify-center py-5 py-6 rounded-lg">
      <div
        class="mx-auto w-full max-w-screen-[100%] bg-blue-700 px-5 py-10 rounded-xl">
        <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div class="flex justify-center md:justify-end">
            <img
              class="w-full max-w-sm"
              src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png"
              alt="Marketing newsletter via computer Illustration in PNG, SVG" />
          </div>
          <div class="flex items-center">
            <div class="mx-auto md:mx-0">
              <h3 class="text-4xl font-bold text-white">Subscribe</h3>
              <p class="mt-2 max-w-[20rem] text-lg text-white/80">
                Join our weekly digest. You'll also receive some of our best
                posts today.
              </p>
              <form action="" class="mt-4 flex flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
                <button
                  type="submit"
                  class="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueContact",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
