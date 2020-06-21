<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2"></div>

      <div class="col-8">
        <AppHeader />
        <nuxt />
      </div>

      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/Header";
export default {
  components: {
    AppHeader
  }
};
</script>

