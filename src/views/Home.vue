<template>
  <div class="home">
    <h1 class="title">Scoreboard List</h1>
    <ol>
      <li v-for="(ranking, rankingIndex) in rankings" v-bind:key="ranking.name">
        {{ rankingIndex + 1}}. {{ranking.name}}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { mapState, mapMutations } from 'vuex';

@Component({
  computed: mapState([
    'rankings',
  ]),
})
export default class Home extends Vue {
  public source = firebase.firestore().collection('rankings');
  public created() {
    this.$store.dispatch('setRankingsRef', this.source);
  }
}
</script>
