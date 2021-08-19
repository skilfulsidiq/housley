<template>
    <div>
         <div class="container">
            <div class="donut-chart-block block">
                    <div class="donut-chart">
                        <div id="part1" class="portion-block"><div class="circle " :class="color"></div></div>
                        <div id="part2" class="portion-block"><div class="circle " :class="color"></div></div>
                        <div id="part3" class="portion-block"><div class="circle " :class="color"></div></div>
                        <p class="center">{{label}}%</p>
                    </div>
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        name:"PieChart",
        props:{
            label:{type:Number},
            color:{type:String},
        }
    }
</script>

<style lang="scss" scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.donut-chart {
  position: relative;
	width: 150px;
  height: 150px;
	margin: 0 auto 1rem;
	border-radius: 100%
 }
p.center {
  background: #fff;
  position: absolute;
  text-align: center;
font-size: 15px;
  top:0;left:0;bottom:0;right:0;
  font-weight: 800;
  width: 75px;
  height: 75px;
  margin: auto;
  border-radius: 50%;
  line-height: 8px;
  // padding: 7% 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}


.portion-block {
    border-radius: 50%;
    clip: rect(0px, 150px, 150px, 50px);
    height: 100%;
    position: absolute;
    width: 100%;
  }
.circle {
    border-radius: 50%;
    clip: rect(0px, 75px, 150px, 0px);
    height: 100%;
    position: absolute;
    width: 100%;
    font-family: monospace;
    font-size: 1.5rem;
  }


#part1 {
    transform: rotate(0deg);
}
.gray-circle{
       background-color: #cfc9ca;
}
.blue-circle{
       background-color: #50806a;
}
.green-circle{
       background-color: #045e22;
}

#part1 .circle {
    // background-color: #E64C65;
    /*transform: rotate(76deg);*/
    animation: first 1s 1 forwards;
    }


#part2 {
    transform: rotate(100deg);
  }
#part2 .circle {
    // background-color: #11A8AB;
    animation: second 1s 1 forwards 1s;
  }
#part3 {
    transform: rotate(250deg);
}
#part3 .circle {
		// background-color: #4FC4F6;
		animation: third 0.5s 1 forwards 2s;
}


/* Animation */
@keyframes first {
    from {transform: rotate(0deg);}
    to {transform: rotate(100deg);}
}

@keyframes second {
    from {transform: rotate(0deg);}
    to {transform: rotate(150deg);}
}

@keyframes third {
    from {transform: rotate(0deg);}
    to {transform: rotate(111deg);}
}
</style>
