<template>
  <div class="container">
    <!-- <div class="btn-container">
      <button class="show-button" :class="{'hide-button': showCamera}" @click="showCamera = !showCamera">{{ showCamera ? 'Close camera' : 'Open camera' }}</button>
    </div> -->
    <Camera v-if="showCamera"/>
  </div>
</template>

<script>
import Camera from './components/Camera.vue'
export default {
  components: { Camera },
  name: 'App',
  data: () => ({
    showCamera: true
  })
}
</script>

<style>
@import url('~normalize.css');

* {
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  min-width: 290px;
  margin: 0 auto;
  padding: 5px 10px 50px 10px;
}
</style>
