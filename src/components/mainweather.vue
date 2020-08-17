<template>
    <div id="container">
        <span id="temp"> 30&#176;F </span>
        <span id="date"> Sol 119 </span>
    </div>
</template>


<script>
export default {
    name: 'mainweather',
}
</script>

<style scoped>
@font-face { font-family: Montserrat;  src: url('../../src/assets/Montserrat-Regular.otf'); } 
 @font-face { font-family: Montserrat_Light;  src: url('../../src/assets/Montserrat-Light.otf');}
 #container{
     position:relative;
 }
 #temp{
     top:181px;
     left:511px;
     font-family:Montserrat;
     color:white;
     position:absolute;
     font-size:180px;
 }
  #date{
     top:421px;
     left:627px;
     font-family:Montserrat_Light;
     color:white;
     position:absolute;
     font-size:47px;
 }
</style>