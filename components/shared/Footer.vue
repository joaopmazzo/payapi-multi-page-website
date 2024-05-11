<template>
  <footer
    class="background bg-no-repeat bg-secondary-mirage-blue flex flex-col sm:flex-row items-center sm:justify-between px-6 py-12"
  >
    <div class="sm:flex sm:items-center sm:gap-16">
      <NuxtLink :to="{ path: '/', hash: '#anchor' }">
        <img
          class="w-28 max-sm:pb-10"
          src="../../assets/shared/desktop/logo.svg"
          alt="PayApi logo"
        />
      </NuxtLink>
      <div
        class="text-primary-link-water-white font-light font-public-sans text-body leading-body flex flex-col sm:flex-row items-center sm:gap-10"
      >
        <NuxtLink :to="{ path: '/pricing', hash: '#anchor' }">Pricing</NuxtLink>
        <NuxtLink :to="{ path: '/about', hash: '#anchor' }">About</NuxtLink>
        <NuxtLink :to="{ path: '/contact', hash: '#anchor' }">Contact</NuxtLink>
      </div>
    </div>
    <div class="flex max-sm:pt-10 gap-6">
      <img
        src="../../assets/shared/desktop/facebook.svg"
        alt="Facebook logo"
      />
      <img
        src="../../assets/shared/desktop/twitter.svg"
        alt="Facebook logo"
      />
      <img
        src="../../assets/shared/desktop/linkedin.svg"
        alt="LinkedIn logo"
      />
    </div>
  </footer>
</template>
