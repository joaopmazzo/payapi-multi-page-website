<template>
  <div
    class="background bg-[#EDF3F8] bg-no-repeat flex flex-col items-center text-center px-6 sm:px-24 py-20 gap-6"
  >
    <div class="grid">
      <img
        class="w-60 pl-7 mx-auto"
        src="../assets/home/desktop/illustration-phone-mockup.svg"
        alt="Simple UI illustration of a phone"
      />
      <h1
        class="mx-auto text-secondary-san-juan-blue font-light font-DM-serif text-h3-big sm:text-h2 leading-h3-big sm:leading-h2 tracking-h3-big sm:tracking-h2"
      >
        Start building with our APIs for absolutely free.
      </h1>
    </div>
    <ScheduleDemoForm class="w-full" />
    <p
      class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
    >
      Have any question? <span class="font-bold">Contact Us</span>
    </p>
  </div>

  <div
    class="bg-secondary-mirage-blue flex flex-col items-center text-center px-6 py-20"
  >
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-12 pb-14">
      <img
        src="../assets/shared/desktop/tesla.svg"
        alt="Tesla Logo"
      />
      <img
        src="../assets/shared/desktop/microsoft.svg"
        alt="Microsoft Logo"
      />
      <img
        src="../assets/shared/desktop/hewlett-packard.svg"
        alt="HP Logo"
      />
      <img
        src="../assets/shared/desktop/oracle.svg"
        alt="Oracle Logo"
      />
      <img
        src="../assets/shared/desktop/google.svg"
        alt="Google Logo"
      />
      <img
        src="../assets/shared/desktop/nvidia.svg"
        alt="Nvidia Logo"
      />
    </div>
    <div class="flex flex-col items-center gap-6 sm:px-40">
      <h1
        class="text-primary-link-water-white font-DM-serif text-h3-big sm:text-h2 leading-h3-big sm:leading-h2 tracking-h3-big sm:tracking-h2 pb-4"
      >
        Who we work with
      </h1>
      <p
        class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
      >
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with thee tools they need to create easy and accessible experiences for
        their users.
      </p>
      <!-- here goes a button -->
    </div>
  </div>

  <div
    class="bg-[#EDF3F8] flex flex-col items-center text-center gap-20 sm:gap-24 px-6 py-20"
  >
    <div class="flex flex-col items-center text-center sm:px-24">
      <img
        src="../assets/home/desktop/illustration-easy-to-implement.svg"
        alt="terminal with code"
      />
      <h1
        class="text-secondary-san-juan-blue font-light font-DM-serif text-h3-big sm:text-h2 leading-h3-big sm:leading-h2 tracking-h3-big sm:tracking-h2 pb-6"
      >
        Easy to implement
      </h1>
      <p
        class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
      >
        Our API comes with just a few lines of code. You'll be up running in no
        time. We built our documentation page to integrate payments
        functionality with ease.
      </p>
    </div>

    <div class="flex flex-col items-center text-center sm:px-24">
      <img
        src="../assets/home/desktop/illustration-simple-ui.svg"
        alt=""
      />
      <h1
        class="text-secondary-san-juan-blue font-light font-DM-serif text-h3-big sm:text-h2 leading-h3-big sm:leading-h2 tracking-h3-big sm:tracking-h2 pb-6"
      >
        Simple Ui & UX
      </h1>
      <p
        class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
      >
        Our pre-built form is easy to integrate in your app or website's
        checkout flow and designed to optimize conversion.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-2">
      <div class="flex flex-col items-center gap-4 sm:max-w-56">
        <img
          class="pb-4"
          src="../assets/home/desktop/icon-personal-finances.svg"
          alt=""
        />
        <h
          class="text-secondary-san-juan-blue font-bold font-public-sans text-h3-small leading-h3-small tracking-h3-small"
        >
          Personal Finances
        </h>
        <p
          class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
        >
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </div>

      <div class="flex flex-col items-center gap-4 sm:max-w-56">
        <img
          class="pb-4"
          src="../assets/home/desktop/icon-banking-and-coverage.svg"
          alt=""
        />
        <h3
          class="text-secondary-san-juan-blue font-bold font-public-sans text-h3-small leading-h3-small tracking-h3-small"
        >
          Banking & Coverage
        </h3>
        <p
          class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
        >
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </div>

      <div class="flex flex-col items-center gap-4 sm:max-w-56">
        <img
          class="pb-4"
          src="../assets/home/desktop/icon-consumer-payments.svg"
          alt=""
        />
        <h3
          class="text-secondary-san-juan-blue font-bold font-public-sans text-h3-small leading-h3-small tracking-h3-small"
        >
          Consumer Payments
        </h3>
        <p
          class="text-secondary-light-san-juan-blue font-light font-public-sans text-body leading-body"
        >
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center gap-10 w-full">
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
  background-position: bottom 540px right 50%;
}

@media (min-width: 640px) {
  .background {
    background-position: bottom 500px right 50%;
    background-size: 1300px;
  }
}
</style>
