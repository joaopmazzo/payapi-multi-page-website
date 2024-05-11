<script lang="ts">
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>

<template>
  <form
    class="sm:relative flex flex-col sm:flex-row gap-4 sm:max-w-md"
    action=""
  >
    <input
      class="sm:w-full px-7 py-3 bg-primary-link-water-white rounded-3xl shadow-md text-secondary-san-juan-blue font-bold font-public-sans text-body leading-body"
      type="text"
      placeholder="Enter email address"
      name="email"
      id="email"
    />
    <button
      class="sm:absolute sm:right-0 px-7 py-3 bg-primary-dark-pink rounded-3xl shadow-md text-primary-link-water-white font-bold font-public-sans text-body leading-body"
    >
      Schedule a Demo
    </button>
  </form>
</template>
