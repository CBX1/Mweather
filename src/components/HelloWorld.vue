<template>
<div id="container">
  <div v-if="box=='one'">
    <transition name="fade" mode="out-in">
      <div v-if="alltrue">
        <div class="card" v-bind:style="{ 'top': '497px', 'left': '130px' }">
        </div>
        <span class="top" v-bind:style="{ 'top': '519px', 'left': '169px' }"> Yesterday </span>
        <span class="bottom" v-bind:style="{ 'top': '670px', 'left': '173px' }">{{temp_yesterday |c_f}}&#176;F </span>
        <img src='@/assets/smallsnow.svg' id="firstboximage">
      </div>
    </transition>
  </div>
  <div v-if="box=='two'">
    <transition name="fade" mode="out-in">
      <div v-if="alltrue">
        <div class="card" v-bind:style="{ 'top': '497px', 'left': '589px' }">
        </div>
        <span class="top" v-bind:style="{ 'top': '521px', 'left': '614px' }"> Windspeed </span>
        <span class="bottom" v-bind:style="{ 'top': '633px', 'left': '625px' }">{{windspeed | round}} MPH </span>
        <span class="bottom" v-bind:style="{ 'top': '673px', 'left': '647px' }">{{winddirection}} </span>
        <img src='@/assets/wind.svg' id="secondboximage">
      </div>
    </transition>
  </div>
  <div v-if="box=='three'">
    <transition name="fade" mode="out-in">
      <div v-if="alltrue">
        <div class="card" v-bind:style="{ 'top': '497px', 'left': '1047px' }">
        </div>
        <span class="top" v-bind:style="{ 'top': '518px', 'left': '1093px' }"> Pressure </span>
        <span class="bottom" v-bind:style="{ 'top': '669px', 'left': '1095px' }"> {{pressure | round}} Pa</span>
        <img src='@/assets/meter.svg' id="thirdboximage">
      </div>
    </transition>
 </div>
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',

  props:{
    box: String,
  },
  methods: {
  },
  computed: {
     ...mapState(['temp_yesterday','windspeed','winddirection','pressure','alltrue']),
  },
  filters: {
      c_f(a){
        if(Math.round(a)>-100){
                 return Math.round((a * 1.8 + 32)*10)/10;
            }
             return Math.round((a));
        },
      round(a){
        if(Math.round(a) < 10){
          return Math.round(a* 10) / 10
        }
        return Math.round(a);
      }
  }
}
</script>
<style scoped>
@font-face { font-family: Montserrat;  src: url('../../src/assets/Montserrat-Regular.otf'); } 
 @font-face { font-family: Montserrat_Light;  src: url('../../src/assets/Montserrat-Light.otf');}
 @font-face { font-family: Montserrat_UltraLight;  src: url('../../src/assets/Montserrat-UltraLight.otf');}

.card{
  height:227px;
  width:223px;
  background-image: linear-gradient(#60575A, #B17966);
  opacity:.83;
  border-radius:20px;
  position:absolute;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.73);
}
.container{
  position:relative;
}
.top{
  font-family:Montserrat_Light;
color:white;
position:absolute;
font-size:31px;
text-align:center;
}
.bottom{
font-family:Montserrat_UltraLight;
font-weight:Light;
color:white;
position:absolute;
font-size:40px;
text-align:center;
}
#firstboximage{
  position:absolute; 
  top:569px; 
  left:202px;
}
#secondboximage{
 position:absolute;
 top:570px;
 left:663px;
}
#thirdboximage{
  position:absolute; 
  top:572px; 
  left:1119px;
}
 .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
