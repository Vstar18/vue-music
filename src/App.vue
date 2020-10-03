<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
import Header from 'components/Header/header'
import Tab from 'components/Tab/Tab'

export default {
  name: 'App',
  components: {
    Header,
    Tab
  }
}
</script>

<style>
</style>
