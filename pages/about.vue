<script lang="ts">
export default {
  data() {
    return {
      aboutFirstSection: [
        {
          name: "Our Vision",
          description:
            "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.",
        },
        {
          name: "Our Business",
          description:
            "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.",
        },
      ],
      aboutSecondSection: [
        {
          name: "Our Business",
          description:
            "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
        },
        {
          name: "The People",
          description:
            "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="background bg-[#EDF3F8] bg-no-repeat flex flex-col items-center text-center gap-10 sm:gap-16 px-6 pt-32 sm:pt-40 pb-20"
  >
    <h1
      class="text-secondary-san-juan-blue font-light font-DM-serif text-h3-big sm:text-h2 leading-h3-big sm:leading-h2 tracking-h3-big sm:tracking-h2 text-wrap"
    >
      We empower <br class="sm:hidden" />innovators<br class="sm:hidden" />
      by delivering access to the financial system.
    </h1>

    <div
      class="sm:flex sm:justify-between sm:w-full sm:px-10 sm:text-justify"
      v-for="(item, index) in aboutFirstSection"
      :key="index"
    >
      <h1
        class="text-secondary-san-juan-blue font-light font-DM-serif text-h4 leading-h4 tracking-h4 pb-4"
      >
        {{ item.name }}
      </h1>
      <p
        class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body sm:max-w-[456px]"
      >
        {{ item.description }}
      </p>
    </div>
  </div>

  <img
    class="w-full sm:hidden"
    src="../assets/about/mobile/image-team-members.jpg"
    alt="group of people united"
  />
  <img
    class="w-full max-sm:hidden"
    src="../assets/about/tablet/image-team-members.jpg"
    alt="group of people united"
  />

  <div
    class="bg-[#EDF3F8] flex flex-col items-center text-center gap-10 sm:gap-16 px-6 py-12"
  >
    <div class="w-full grid grid-cols-1 sm:grid-cols-3 py-4 gap-8 sm:gap-2">
      <hr class="w-full sm:hidden" />

      <div>
        <hr class="w-full max-sm:hidden mb-4" />
        <h3
          class="text-secondary-san-juan-blue font-light font-public-sans text-body leading-body"
        >
          Team Members
        </h3>
        <span
          class="text-primary-dark-pink font-light font-DM-serif text-h1-small sm:text-h1-small leading-h1-small sm:leading-h1-small tracking-h1-small sm:tracking-h1-small"
        >
          300+
        </span>
        <hr class="w-full max-sm:hidden mt-4" />
      </div>

      <div>
        <hr class="w-full max-sm:hidden mb-4" />
        <h3
          class="text-secondary-san-juan-blue font-light font-public-sans text-body leading-body"
        >
          Offices in the US
        </h3>
        <span
          class="text-primary-dark-pink font-light font-DM-serif text-h1-small sm:text-h1-small leading-h1-small sm:leading-h1-small tracking-h1-small sm:tracking-h1-small"
        >
          3
        </span>
        <hr class="w-full max-sm:hidden mt-4" />
      </div>

      <div>
        <hr class="w-full max-sm:hidden mb-4" />
        <h3
          class="text-secondary-san-juan-blue font-light font-public-sans text-body leading-body"
        >
          Transactions analyzed
        </h3>
        <span
          class="text-primary-dark-pink font-light font-DM-serif text-h1-small sm:text-h1-small leading-h1-small sm:leading-h1-small tracking-h1-small sm:tracking-h1-small"
        >
          10M+
        </span>
        <hr class="w-full max-sm:hidden mt-4" />
      </div>

      <hr class="w-full sm:hidden" />
    </div>

    <div
      class="sm:flex sm:justify-between sm:w-full sm:px-10 sm:text-justify"
      v-for="(item, index) in aboutSecondSection"
      :key="index"
    >
      <h1
        class="text-secondary-san-juan-blue font-light font-DM-serif text-h4 leading-h4 tracking-h4 pb-4"
      >
        {{ item.name }}
      </h1>
      <p
        class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body sm:max-w-[456px]"
      >
        {{ item.description }}
      </p>
    </div>

    <div class="w-full flex flex-col items-center gap-10 sm:mt-9 sm:mb-16">
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
  background-position: bottom 755px right 115%;
}

@media (min-width: 640px) {
  .background {
    background-position: bottom 470px left 68vw;
  }
}
</style>
