<template>
<div id="container">
  <div v-if="box=='one'">
    <div class="card" v-bind:style="{ 'top': '497px', 'left': '130px' }">
    </div>
    <span class="top" v-bind:style="{ 'top': '519px', 'left': '169px' }"> Yesterday </span>
    <span class="bottom" v-bind:style="{ 'top': '669px', 'left': '201px' }"> 30&#176;F </span>
  </div>
  <div v-if="box=='two'">
    <div class="card" v-bind:style="{ 'top': '497px', 'left': '589px' }">
    </div>
    <span class="top" v-bind:style="{ 'top': '521px', 'left': '614px' }"> Windspeed </span>
    <span class="bottom" v-bind:style="{ 'top': '669px', 'left': '606px' }">30 MPH <b>N</b> </span>
  </div>
  <div v-if="box=='three'">
    <div class="card" v-bind:style="{ 'top': '497px', 'left': '1047px' }">
    </div>
    <span class="top" v-bind:style="{ 'top': '518px', 'left': '1093px' }"> Pressure </span>
    <span class="bottom" v-bind:style="{ 'top': '669px', 'left': '1088px' }"> 791.4 Pa </span>
 </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      info: null,
    }
  },
  props:{
    box: String,
  },
  methods: {
    async prevDate(){
    await axios
      .get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
      .then(response => (this.info = response.data.sol_keys[6]))
      .catch(error => {
                    console.log(error + 'error');
                });
      console.log("response: " + this.info);
      
    }
  },
  created() {
    this.prevDate();
    console.log("box: "+ this.box );
  },
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


</style>
