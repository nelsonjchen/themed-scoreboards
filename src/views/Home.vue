<template>
  <div class="home">
    <h1 class="title">Scoreboard List</h1>
    <ol>
      <li v-for="(ranking, rankingIndex) in rankings" v-bind:key="ranking.name">{{ rankingIndex }} {{ranking}}</li>
    </ol>
    Hmm
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({})
export default class Home extends Vue {
  source = firebase.firestore().collection('rankings');
  rankings = this.$store.state.rankings
  created() {
    this.$store.dispatch('setRankingsRef', this.source);
  }
}
</script>
