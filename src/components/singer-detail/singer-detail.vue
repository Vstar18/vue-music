<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :bgImage="bgImage"></music-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/songs'
import MusicList from 'components/music-list/music-list'

export default {
  components: {
    MusicList
  },
  computed: {
    title: function () {
      return this.singer.name
    },
    bgImage: function () {
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  data () {
    return {
      songs: []
    }
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
          this.songs = this._normalizeSongs(res.data.list)
        }
        console.log(this.songs, 'this.songs----')
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.singer-detail {
  position :fixed
  z-index: 100
  top:0
  left: 0
  right: 0
  bottom: 0
  background-color: $color-background
}
</style>
