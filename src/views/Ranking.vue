<template>
  <div class="rankings">
    <h1 class="title">Top Ranking</h1>
    <table class="table">
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Name
          </th>
          <th>
            Score
          </th>
        </tr>
      </thead>
      <tr>
        <td>1</td>
        <td>Loser</td>
        <td>900</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Ranking extends Vue {}
</script>
