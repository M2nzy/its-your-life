<template>
    <li>
        <input type="checkbox" :checked="idol.checked"> {{ idol.id }} - {{ idol.name }}
    </li>
</template>

<script>
import idol from '../Idol.js';
export default{
    name:'CheckboxItem3',
    props:{
        idol:idol,
    }
}
</script>