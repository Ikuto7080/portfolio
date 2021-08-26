<template>
  <div id="works">
      <div class="cmn-section" id="about">
          <div class="inner my_works">
            <v-container fluid>
            <h2 class="cmn-title text-center pb-4">
                  <span class="title text-h4">WORKS</span>
            </h2>
              <v-row dense>
                <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
                class="card-item pa-3"
                >
                  <v-card>
                    <v-img
                    :src="card.image"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,00,.5)"
                    height="200px"
                    >
                      <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon
                      :href="card.src_home"
                      >
                        <i class="fas fa-home fa-3x"></i>
                      </v-btn>
                      <v-btn icon
                      :href="card.src_git"
                      class="ml-4"
                      >
                        <i class="fab fa-github fa-3x"></i>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cards: [
        {title: "About Me", image: require("@/assets/portfolio.png"),src_home: "https://ikuto7080.github.io/portfolio_vuejs/", src_git: "https://github.com/Ikuto7080/portfolio_vuejs", flex: 6},
        {title: "Works", image: require("@/assets/gokurakutei.png"), src_home: "https://server-for-exercise.com/", src_git: "https://github.com/Ikuto7080/portfolio_wp", flex: 6},
        {title: "Works", image: require("@/assets/toefl-site.png"), src_home: "https://toefl.server-for-exercise.com/", src_git: "https://github.com/Ikuto7080/toefl-site", flex: 6},
        {title: "Works", image: require("@/assets/company-site.png"), src_home: "http://ikutochan.html.xdomain.jp/company-site/", src_git: "https://github.com/Ikuto7080/company-site", flex: 6},
      ]
    }
  }
}
</script>

<style>

</style>