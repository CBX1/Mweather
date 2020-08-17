<template>
  <div id="app">
    <mainweather/>
    <HelloWorld key=1 box="one"/>
    <HelloWorld key=2 box="two"/>
    <HelloWorld key=3 box="three"/>
     <Footer id="foot"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import mainweather from './components/mainweather.vue'
import Footer from './components/footer.vue'
import {mapState} from 'vuex';
export default {
  name: 'App',
  components: {
    HelloWorld,
    mainweather,
    Footer,
  },
   computed: {
        ...mapState(['alltrue']),
    },
}
</script>

<style>
@font-face { font-family: Montserrat; src: url('../src/assets/Montserrat-Regular.otf'); } 
#app {
  background-image: url('../src/assets/real1.png');
   position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
}
#id{
  font-family: Montserrat;
  height:1068px;
  width:1608px;
  left:-90;
  top:-193;
}
#foot{
  width:100%;
}
</style>
