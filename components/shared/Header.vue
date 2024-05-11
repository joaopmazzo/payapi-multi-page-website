<template>
  <header class="bg-transparent absolute w-full">
    <div class="flex items-center justify-between px-6 pt-10">
      <NuxtLink :to="{ path: '/', hash: '#anchor' }">
        <img
          class="w-28"
          src="../../assets/shared/desktop/logo-grey.svg"
          alt="PayApi logo"
        />
      </NuxtLink>

      <div
        class="max-sm:block text-secondary-san-juan-blue font-light font-public-sans text-body leading-body flex items-center gap-10"
      >
        <NuxtLink :to="{ path: '/pricing', hash: '#anchor' }">Pricing</NuxtLink>
        <NuxtLink :to="{ path: '/about', hash: '#anchor' }">About</NuxtLink>
        <NuxtLink :to="{ path: '/contact', hash: '#anchor' }">Contact</NuxtLink>
      </div>
      <button
        class="max-sm:block px-7 py-3 bg-primary-dark-pink rounded-3xl shadow-md text-primary-link-water-white font-bold font-public-sans text-body leading-body"
      >
        Schedule a Demo
      </button>

      <img
        class="sm:hidden w-7"
        src="../../assets/shared/mobile/menu.svg"
        alt="Menu button"
      />
    </div>
  </header>
</template>
