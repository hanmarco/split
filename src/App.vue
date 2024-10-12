<template>
  <v-app>
    <v-main>
      <MainPanel/>
    </v-main>
  </v-app>
</template>

<script>
import MainPanel from './components/MainPanel.vue'

export default {
  name: 'App',

  components: {
    MainPanel,
  },

  data: () => ({
    //
  }),
}
</script>
