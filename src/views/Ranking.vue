<template>
  <div class="rankings">
    <h1 class="title">Top Ranking</h1>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tr v-for="(score, index) in sortedScores" :key="score.name">
        <td>{{ index + 1 }}</td>
        <td>{{ score.name }}</td>
        <td>{{ score.score }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";
import "firebase/firestore";
import { mapState, mapMutations } from "vuex";

@Component({
  computed: mapState(["ranking"])
})
export default class Ranking extends Vue {
  source!: firebase.firestore.DocumentReference;
  ranking!: any;

  public created() {
    this.source = firebase
      .firestore()
      .collection("rankings")
      .doc(this.$route.params["id"]);
    this.$store.dispatch("setRankingRef", this.source);
  }

  get sortedScores() {
    function compare(a: any, b: any) {
      if (a.score === undefined) {
        return 1;
      }
      if (b.score === undefined) {
        return -1;
      }

      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    }
    return this.ranking.entries.concat().sort(compare);
  }

  get top() {
    return this.sortedScores.slice(0, 3);
  }

  get rest() {
    return this.sortedScores.slice(3);
  }
}
</script>
