<script lang="ts">
export default {
  data() {
    return {
      plans: [
        {
          name: "Free Plan",
          price: 0.0,
          description:
            "Build and test using our core set of products with up to 100 API requests",
          benefits: [
            { name: "Transactions", active: true },
            { name: "Auth", active: true },
            { name: "Identity", active: true },
            { name: "Investments", active: false },
            { name: "Assets", active: false },
            { name: "Liabilities", active: false },
            { name: "Income", active: false },
          ],
        },
        {
          name: "Basic Plan",
          price: 249,
          description:
            "Launch your project with unlimited requests and no contractual minimums",
          benefits: [
            { name: "Transactions", active: true },
            { name: "Auth", active: true },
            { name: "Identity", active: true },
            { name: "Investments", active: true },
            { name: "Assets", active: true },
            { name: "Liabilities", active: false },
            { name: "Income", active: false },
          ],
        },
        {
          name: "Premium Plan",
          price: 499,
          description:
            "Get tailored solutions, volume pricing, and dedicated support for your team ",
          benefits: [
            { name: "Transactions", active: true },
            { name: "Auth", active: true },
            { name: "Identity", active: true },
            { name: "Investments", active: true },
            { name: "Assets", active: true },
            { name: "Liabilities", active: true },
            { name: "Income", active: true },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="background bg-[#EDF3F8] bg-no-repeat flex flex-col items-center text-center gap-12 sm:gap-24 px-6 pt-32 sm:pt-40 pb-20"
  >
    <h1
      class="text-secondary-san-juan-blue font-light font-DM-serif text-h3-big sm:text-h2 leading-h3-big sm:leading-h2 tracking-h3-big sm:tracking-h2"
    >
      Pricing.
    </h1>

    <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-2">
      <div
        class="flex flex-col gap-6"
        v-for="(plan, index) in plans"
        :key="index"
      >
        <h2
          class="text-primary-dark-pink font-light font-DM-serif text-h4 leading-h4 tracking-h4 max-sm:pb-20"
        >
          {{ plan.name }}
        </h2>
        <p
          class="max-sm:hidden text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
        >
          {{ plan.description }}
        </p>
        <h1
          class="text-secondary-san-juan-blue font-light font-DM-serif text-h1-small leading-h1-small tracking-h1-small"
        >
          ${{ plan.price.toFixed(2) }}
        </h1>
        <hr />
        <div
          class="flex flex-col items-center"
          v-for="(benefit, index) in plan.benefits"
          :key="index"
        >
          <div :class="`flex w-32 ${benefit.active ? 'gap-6' : 'pl-9'}`">
            <img
              v-show="benefit.active"
              src="../assets/shared/desktop/icon-check.svg"
              alt="check icon"
            />
            <span
              :class="`font-light font-public-sans text-body leading-body
            ${
              benefit.active
                ? 'text-secondary-san-juan-blue'
                : 'text-secondary-light-san-juan-blue'
            }`"
              >{{ benefit.name }}</span
            >
          </div>
        </div>
        <hr />x``
      </div>
    </div>
    <div class="w-full flex flex-col items-center gap-10 sm:mb-16">
      <h1
        class="text-secondary-san-juan-blue font-light font-DM-serif text-h3-big leading-h3-big tracking-h3-big"
      >
        Ready to start?
      </h1>
      <ScheduleDemoForm class="w-full" />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
  background-position: bottom 2430px right 115%;
}

@media (min-width: 640px) {
  .background {
    background-position: bottom 1050px left 68vw;
  }
}
</style>
