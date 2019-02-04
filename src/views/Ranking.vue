<template>
  <div class="rankings">
    <table class="table">
      <thead>
        <tr>
          <th>
            <abbr title="Position">#</abbr>
          </th>
        </tr>
      </thead>
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
