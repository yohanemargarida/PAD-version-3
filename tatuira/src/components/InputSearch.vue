<template>
  <div class="search-box">
    <div class="search-icon">
      <img src="../assets/img/icon-busca.svg" width="100%" />
    </div>
    <input v-model="inputName" type="text" placeholder="digite sua busca" class="search-input" />
    <button :disabled="!inputName" @click="search" class="search-button" type="button">buscar</button>
  </div>
</template>

<script>
export default {
  computed: {
    inputName: {
      get() {
        return this.$store.state.inputName;
      },
      set(payload) {
        this.$store.commit("setInputName", payload);
      }
    }
  },

  methods: {
    search() {
      this.$store.state.searched = true;
    }
  },

  watch: {
    inputName() {
      this.$store.state.searched = false;
    }
  }
};
</script>

<style>
.search-box {
  width: 80%;
  height: 45px;
  margin-top: 12%;
  border: #00d4bb solid 1px;
  display: flex;
  justify-content: space-around;
}
.search-icon {
  width: 6%;
  height: 100%;
  float: left;
  margin-top: 2.5%;
  margin-left: 2%;
}
.search-input {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background: transparent;
  border: none;
  padding-top: 2px;
  padding-left: 7px;
}
.search-button {
  width: 24%;
  height: 100%;
  color: white;
  border: none;
  padding-top: 2px;
  background: #00d4bb;
  font-size: 15pt;
  font-weight: normal;
  font-family: "Kastelov Axiforma";
}
::-webkit-input-placeholder {
  color: #aaa;
  font-family: "Kastelov Axiforma";
  font-weight: normal;
  font-size: 19pt;
}
@media (min-width: 1024px) {
  .search-button {
    font-size: 12pt;
    font-weight: normal;
  }
  ::-webkit-input-placeholder {
    font-size: 15pt;
  }
}
</style>