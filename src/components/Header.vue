<template>
    <!-- header -->
    <div class="header" id="header">
        <div>
            <v-app-bar>
                <!--ヘッダー内容-->
                <v-img class="mx-4 pr-2" :src="require('@/assets/my_portfoliio_image.png')"
                max-height="70"
                max-width="100"
                contain
                ></v-img>
                <v-spacer></v-spacer>
                <a href="#about-me" class="px-2" v-smooth-scroll>About Me</a>
                <a href="#skill" class="px-2" v-smooth-scroll>Skill</a>
                <a href="#service" class="px-2" v-smooth-scroll>Service</a>
                <a href="#works" class="px-2" v-smooth-scroll>Works</a>
            </v-app-bar>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    }
}
</script>

<style>

</style>