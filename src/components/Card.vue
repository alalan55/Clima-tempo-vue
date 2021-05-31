<template>
    <div class="card">
       <input type="text" v-model="name"  @keypress="pegarCidade">
    {{name}}
    </div>
</template>

<script>
import {ref} from 'vue'
//import {doRequest} from '../services/service'

export default {
    setup () {
        const cidade = ref({});
        const name = ref('');

        const pegarCidade = async (e) => {
            if(e.key == "Enter"){
            //    cidade.value = await doRequest(name.value)

            //    console.log(cidade.value)
            }
        }

        return {
            cidade,
            name,
            pegarCidade
        }

       
    }
}
</script>

<style lang="scss" scoped>

</style>