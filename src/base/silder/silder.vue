<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{ active: index === currentPageIndex}" v-for="(item,index) in dots" :key="index"></span>
    </div>
  </div>
</template>
<script>
import {addClass} from 'common/js/dom'
import BScroll from 'better-scroll'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSilderWidth()
      this._initDots()
      this._initSilder()
    }, 20)
  },
  methods: {
    _setSilderWidth () {
      let width = 0
      let silderWidth = this.$refs.slider.clientWidth
      this.children = this.$refs.sliderGroup.children
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = silderWidth + 'px'
        width += silderWidth
      }
      if (this.loop) {
        width += 2 * silderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSilder () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        slide: true,
        useTransition: true,
        momentum: false,
        autoplay: true,
        interval: 3000
      })
      this.slider.on('scrollEnd', (event) => {
        let pageIndex = this.slider.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
      })
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    position: relative
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
