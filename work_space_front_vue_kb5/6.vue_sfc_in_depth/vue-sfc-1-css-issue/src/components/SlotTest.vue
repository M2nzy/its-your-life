<template>
    <div>
        <h3>당신이 경험한 프론트 엔드 기술은? (두번째:slot기본)</h3>
        <div> - 기본적인 slot을 활용한 예제</div>
    </div>
</template>


<script>
import CheckBox2 from './CheckBox2.vue';
export default {
    name : "SlotTest",
    components : { CheckBox2 },
    data() {
        return {
            items : [
                { id:"V", checked:true, label:"Vue" },
                { id:"A", checked:false, label:"Angular" },
                { id:"R", checked:false, label:"React" },
                { id:"S", checked:false, label:"Svelte" },
            ]
        }
    },
    methods : {
        CheckBoxChanged(e) {
            let item = this.items.find((item)=> item.id === e.id);
            item.checked = e.checked;
        }
    }
}
</script>