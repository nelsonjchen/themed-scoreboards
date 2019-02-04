<template>
  <div class="home">
    <h1 class="title">Scoreboard List</h1>
    <ol>
      <li>Name</li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
