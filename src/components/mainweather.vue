<template>
    <div id="container">
    <transition name="fade" mode="out-in">
        <div v-if="alltrue">
            <img  src="@/assets/bigsnow.svg" id="bigimage"/>
            <span  id="temp" > {{temp_today | c_f}}&#176;F </span>
            <span  id="date"> Sol {{date}} </span>
        </div>
    </transition>
  
    </div>
</template>


<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
import axios from 'axios';
export default {
    name: 'mainweather',
    data() {
        return {
            info:null,
        }
    },
       computed: {
        ...mapState([  'windspeed','pressure','temp_yesterday','temp_today','date','winddirection','alltrue']),
    },
    methods:{
        ...mapActions['setwindspeed','setpressure','set_temp_yesterday','settemp_today','setdate','setwinddirection','switchalltrue','switchalltruefalse'],
        async setStore(){
            await this.$store.dispatch('switchalltruefalse');
          console.log(this.alltrue);
            await axios
            .get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
            .then(response => (this.info = response.data))
            .catch(error => {
                    console.log(error + 'error');
                });
            var currdate = this.info.sol_keys[6];
            var prevdate = this.info.sol_keys[5];
            await this.$store.dispatch('setdate',currdate);
            await this.$store.dispatch('settemp_today',this.info[currdate].AT.av);
            await this.$store.dispatch('set_temp_yesterday',this.info[prevdate].AT.av);
            await this.$store.dispatch('setwindspeed',this.info[currdate].HWS.av);
            await this.$store.dispatch('setpressure',this.info[currdate].PRE.av);
            await this.$store.dispatch('setwinddirection',this.info[currdate].WD.most_common.compass_point);
            // await this.$store.dispatch('setdate',currdate);
             await this.$store.dispatch('switchalltrue');
             console.log(this.alltrue);
        },
      },
        created() {
          console.log('yo');
          this.setStore();
        },
    filters:{
        c_f(a){
            if(Math.round(a)>-100){
                 return Math.round((a * 1.8 + 32)*10)/10;
            }
             return Math.round((a));
        }
    },
   
}
</script>

<style scoped>
@font-face { font-family: Montserrat;  src: url('../../src/assets/Montserrat-Regular.otf'); } 
 @font-face { font-family: Montserrat_Light;  src: url('../../src/assets/Montserrat-Light.otf');}
 #container{
     position:relative;
 }
 #temp{
     top:184px;
     left:406px;
     font-family:Montserrat;
     color:white;
     position:absolute;
     font-size:180px;
 }
  #date{
     top:394px;
     left:627px;
     font-family:Montserrat_Light;
     color:white;
     position:absolute;
     font-size:47px;
 }
 #bigimage{
     position:absolute;
     top:55px;
     left:646px;
 }
 .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>