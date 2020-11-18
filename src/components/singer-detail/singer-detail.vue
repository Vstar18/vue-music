<template>
  <div class="singer-detail">

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
export default {
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    this._getSingerDetail()
    console.log(this.singer, 'singer===')
  },
  methods: {
    _getSingerDetail () {
      if (!this.singer.id) {
        this.$router.push('./singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {

        }
        console.log(res, '----')
      })
    }
  }
}
</script>

<style>

</style>template>
