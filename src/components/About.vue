<template>
  <div class="cmn-section" id="about-me">
      <v-container class="inner my_introduction white--text">
          <h2 class="cmn-title text-center">
              <span class="title text-h4">About Me</span>
          </h2>

          <div class="profile_image rounded-circle text-center">
              <v-avatar
              justify="space-arournd"
              size="200"
              style="background-size:cover;"
              >
                <img :src="require('@/assets/profile.jpg')">
              </v-avatar>
          </div>

          <div class="introduction text-center py-4">
              <div class="title Heading 4 my-4">INTRODUCTION</div>

              <div class="introduction_cont mx-5">
                <p class="px-4">初めまして。Webエンジニアのいくとと申します。<br>
                <br>
                現在、フルスタックエンジニアとしてWebサイト制作及びWebアプリケーションの開発を行っています。<br>
                <br>
                お客様が求めているものが何かをしっかりとヒアリングし『<span class="red--text text-h6">最高の質</span>』提供しつつ『<span class="red--text text-h6">スピード感</span>』も意識して期待を超えるものを提供させていただきます。<br>
                <br>
                また、いただいたお仕事は最後まで『<span class="red--text text-h6">責任感</span>』を持って取り組ませていただきますのでどうぞよろしくお願いします。
                </p>
              </div>
          </div>

          <div class="education text-center">
              <div class="title">EDUCATION</div>
              <div class="education_cont mx-5">
                <p class="px-4">
                    1999年：兵庫県神戸市出身<br>
                    <br>
                    2020年：創価大学経営学部で特待生に選ばれる<br>
                    <br>
                    プログラミングスクールCodeCampの「HTML,CSS」「Javascript」「PHP」の学習を終えた後、
                    フィリピンで唯一政府公認の学習カリキュラムを持つKredoで３ヶ月間Ruby on Railsについて学習する。<br>
                    <br>
                    株式会社RIOを経営されている恵島さんの元でマレーシアのトップエンジニアの方と飲食系のアプリ開発を行う(言語：Django, Vuejs)。
                </p>
              </div>
          </div>
      </v-container>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>