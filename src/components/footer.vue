<template>
    <div>
       <hr id="line"/> 
        <a href='https://github.com/CBX1/Mweather' target="_blank"> <img src="@/assets/github.svg" id="github"/>  </a>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            github:'',
        }
    },
}
</script>
<style scoped>
#line{
    position:absolute;
    background-color:white;
    top:744.5px;
    width:100%;
}
#github{
    position:absolute;
    left:670px;
    top:765px;
    width:60px;
    }
</style>