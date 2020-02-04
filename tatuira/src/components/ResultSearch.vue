<template>
  <div class="result" v-if="searched && listTattooersFiltered.length">
    <ul v-for="item in listTattooersFiltered" :key="item.id">
      <li>{{item.name}}</li>
    </ul>
  </div>

  <div class="result" v-else-if="searched && !listTattooersFiltered.length">
    <h4>Nome não encontrado: {{ inputName }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    inputName() {
      return this.$store.state.inputName;
    },

    searched() {
      return this.$store.state.searched;
    },

    listTattooersFiltered() {
      return this.$store.getters.listTattooersFiltered;
    }
  }
};
</script>

<style scoped>
.result {
  background: rgba(241, 241, 233, 0.9);
  height: 100%;
  width: 54%;
}
</style>