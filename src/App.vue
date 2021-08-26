<template>
  <div id="App">
    <v-app id="inspire">
      <Header id="header"></Header>
      <v-main>
        <Title></Title>
        <About></About>
        <Skill></Skill>
        <Service></Service>
        <Work></Work>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Title from './components/Title.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'
import Service from './components/Service.vue'

export default {
  name: 'App',

  components: {
    Header,
    Title,
    About,
    Skill,
    Work,
    Service
  },
  data() {
    return {
    }
  }
};
</script>
