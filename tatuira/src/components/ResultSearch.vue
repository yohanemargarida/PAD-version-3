<template>
  <div class="result" v-if="searched && listTattooersFiltered.length">
    <ul v-for="item in listTattooersFiltered" :key="item.id">
      <router-link tag="li" :to="{ name: 'detalhes', query: {id: item.id} }">
        <h3>
          <a>{{item.name}}</a>
        </h3>
      </router-link>
    </ul>
  </div>

  <div class="result" v-else-if="searched && !listTattooersFiltered.length">
    <h4>Nome não encontrado: {{ inputName }}</h4>
  </div>
</template>

<script>
export default {
  
  computed: {
    // pega inputName do state vuex
    inputName() {
      return this.$store.state.inputName;
    },
    // pega searched do state vuex
    searched() {
      return this.$store.state.searched;
    },
    // pega resultado do listTattooersFiltered no getters vuex
    listTattooersFiltered() {
      return this.$store.getters.listTattooersFiltered;
    }
  },
  methods: {

  }
};
</script>

<style scoped>
.result {
  background: rgba(241, 241, 233, 0.9);
  height: 100%;
  width: 54%;
  border: red 1px solid;
}
</style>