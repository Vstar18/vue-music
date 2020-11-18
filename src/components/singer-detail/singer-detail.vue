<template>
  <div class="singer-detail">

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    console.log(this.singer, 'singer===')
  }
}
</script>

<style>

</style>template>
