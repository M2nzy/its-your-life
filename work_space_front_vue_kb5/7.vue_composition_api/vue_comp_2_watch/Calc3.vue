<template lang="">
    <div>
        x : <input type="text" v-model.number="x"><br>
        y : <input type="text" v-model.number="y"><br>
        <div>result : {{result}}</div>
    </div>
</template>
<script>
import {ref, watch} from 'vue';
const x = ref(10);
const y = ref(20);
const result = ref(30);
watch([x, y], ([currentX, currentY], [oldX, oldY]) =>{
    if (currentX !== oldX) console.log(`X : ${oldX} ==> ${currentX}`)
    if (currentY !== oldY) console.log(`Y: ${oldY} ==> ${currentY}`)
    result.value = currentX+currentY;
    
});

</script>
<style lang="">
    
</style>