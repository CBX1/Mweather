<template>
 <div id="app">
<mainweather/>
<HelloWorld box="one"/>
<HelloWorld box="two"/>
<HelloWorld box="three"/>
</div>

</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import mainweather from './components/mainweather.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    mainweather,
  },
//montserrat, light, ultralight
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
</style>
