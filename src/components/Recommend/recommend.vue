<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="disclist">
      <div>
      <div v-if="recommends.length" class="slider-wrapper">
        <div class="slider-content">
          <Silder>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" @load="loadImg" alt="">
              </a>
            </div>
          </Silder>
        </div>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门推荐</h1>
        <ul>
          <li v-for="(item,index) in disclist" class="item" :key="index">
            <div class="icon">
              <img width="60" height="60" :src="item.imgurl" alt=""/>
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import { getRecommend, getDiscList } from 'api/recommend.js'
import Scroll from 'base/scroll/scroll'
import Silder from 'base/silder/silder'
import { ERR_OK } from 'api/config.js'
export default {
  components: {
    Silder,
    Scroll
  },
  data () {
    return {
      disclist: [],
      recommends: []
    }
  },
  created () {
    setTimeout(() => {
      this._getRecommend()
    }, 2000)
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        this.disclist = res.data.list
      })
    },
    loadImg () {
      if (!this.imgLoaded) {
        this.$refs.scroll.refresh()
        this.imgLoaded = true
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
