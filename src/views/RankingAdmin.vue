<template>
  <div class="rankings">
    <h1 class="title">Ranking Admin</h1>
    <div class="control">
      <label class="label">Name</label>
      <p class="control">
        <input
          ref="name"
          required
          v-model="name"
          class="input"
          type="text"
          placeholder="Gamer McGamerface"
        >
      </p>
      <label class="label">Score</label>
      <p class="control">
        <input
          required
          v-model="score"
          class="input"
          type="number"
          placeholder="8888"
          @keyup.enter="addOrUpdate"
        >
      </p>
      <label class="label">Contact Info</label>
      <p class="control">
        <input
          required
          v-model="contact"
          class="input"
          type="text"
          placeholder="Phone, Email, whatever, Twitter(?)"
          @keyup.enter="addOrUpdate"
        >
      </p>
      <p class="control">
        <a :disabled="!validUpdate" class="button" @click="addOrUpdate">Update or Add Score/Contact</a>
      </p>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
          <th>Contact</th>
          <th>REM</th>
        </tr>
      </thead>
      <tr v-for="(score, index) in sortedScores" :key="score.name">
        <td>{{ index + 1 }}</td>
        <td>{{ score.name }}</td>
        <td>{{ score.score }}</td>
        <td>{{ score.contact }}</td>
        <td><a @click="deleteName(score.name)"> ❌ </a></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { mapState, mapMutations } from 'vuex';
import { Score, Ranking as RankingType } from '@/types';

@Component({
  computed: mapState(['ranking']),
})
export default class Ranking extends Vue {
  public source!: firebase.firestore.DocumentReference;
  public ranking!: RankingType;
  public name: string = '';
  public score: number | null = null;
  public contact: string = '';
  public $refs!: {
    name: HTMLElement;
  };

  public created() {
    this.source = firebase
      .firestore()
      .collection('rankings')
      .doc(this.$route.params.id);
    this.$store.dispatch('setRankingRef', this.source);
  }

  get sortedScores() {
    function compare(a: Score, b: Score) {
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

  get validUpdate() {
    return this.name !== '' && (this.score !== undefined || this.contact !== '');
  }

  public deleteName(name: string) {
    const entries = this.ranking.entries.filter((score) => score.name !== name);
    this.source.update({
      entries,
    });

  }

  public addOrUpdate() {
    if (!this.validUpdate) {
      return;
    }

    let entries = this.ranking.entries.concat([]);
    const ranking = entries.find((score) => score.name === this.name);
    if (ranking === undefined) {
      entries = entries.concat(
        [
          {
            name: this.name,
            contact: this.contact,
            score: this.score || 0,
          },
        ],
      );
    } else {
      ranking.score = this.score || ranking.score;
      ranking.contact = this.contact || ranking.contact;
    }

    this.source.update({
      entries,
    });

    this.name = '';
    this.contact = '';
    this.score = null;

    this.$refs.name.focus();
  }
}
</script>
