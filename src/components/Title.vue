<template>
    <div id="top">
        <div id="main">
            <vue-typer 
            :text="['Hello.\nMy name is Ikuto Hongu.\n Thank you for visiting this site. \nNow scroll down.\n\n\n↓\n']"
            :repeat='0'
            :preTypeDelay="1000" 
            :typeDelay="120" 
            :preEraseDelay="5000" 
            :eraseDelay="2000">
            </vue-typer>
        </div>
        <vue-particles 
        color="#dedede" 
        class="particles"
        >
        </vue-particles>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
// import VueParticles from 'vue-particles'

export default {
    components: {
        'vue-typer': VueTyper,
        // 'vue-particles': VueParticles
    }

}
</script>

<style>

</style>