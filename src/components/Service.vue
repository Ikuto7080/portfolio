<template>
  <div id="service">
      <v-container fluid>
          <div class="inner text-center" >
              <div class="service-title">
                  <h2 class="text-h4">Service</h2>
              </div>
              <v-row class="service-wrap">
                  <v-col
                  class="service-item"
                  v-for="n of data"
                  :key="n.title"
                  
                  >
                      <div class="service-img"><v-avatar size="111"><img :src="n.image" alt=""></v-avatar></div>
                      <div class="title py-3 text-h5">{{n.title}}</div>
                      <div class="txt">{{n.txt}}</div>
                      <div class="price-wrap">
                          <div class="price-title">料金目安</div>
                          <div class="price_1">{{n.price_1}}</div>
                          <div class="price_2">{{n.price_2}}</div>
                      </div>
                  </v-col>
              </v-row>
                  <div class="white--text text-h6 py-4">※正式なお見積もりは、別途相談させていただきます。</div>
          </div>
      </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            data: [
                {image: require('@/assets/service-coding.jpeg'), title: "コーデ ィング", txt: "LPやコーポレートサイト、ブログなど、 目的に応じた適切なコーディングを行います(レスポンシブ対応可)。また、軽微なコードの修正などにも対応しています。", price_1: "コード修正: ¥10,000~/1p", price_2: "LP制作: ¥20,000~/1p"},
                {image: require('@/assets/service-design.jpeg'), title: "WEBデザイン", txt: "ヒアリングにより、ご要望に沿ったデザインを的確に把握し作成致します。 ユーザーインターフェースを重要視した設計を行い、ご期待を超える提案を提供します。", price_1: "LP制作: ¥30,000~/1p", price_2: "コーポレートサイト (10p以下): ¥80,000~"},
                {image: require('@/assets/wordpress.jpeg'), title: "WORDPRESS", txt: "コーポレートサイトや個人ブログ、およびウェブマガジンなどのWordPressサイトの構築や既存サイトのWordPress移行、コードの修正に対応しております。", price_1: "Wordpress移行: ¥100,000~", price_2: "Wordpress制作: ¥200,000~"},
            ]
        }
    }
}
</script>

<style>

</style>