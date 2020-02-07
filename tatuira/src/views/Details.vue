<template>
  <Background>
    <div class="details-page">
      <div class="content details-content-box-left">
        <div class="details-topo">
          <Logo logo />
          <router-link :to="{ name: 'home' }" tag="button" class="details-return-button">
            <img src="../assets/img/icon-voltar.svg" />
            <span>Voltar</span>
          </router-link>
        </div>
        <div class="details-tattooer">
          <h1 class="details-tattooer-name">{{tattooer.name}}</h1>
          <p class="details-tattooer-description">{{tattooer.description}}</p>
          <p class="details-tattooer-city">{{tattooer.city}}</p>
          <a :href="tattooer.instagram" class="details-tattooer-website">{{tattooer.instagram}}</a>
          <p>rota {{$route.query.id}}</p>
        </div>
      </div>

      <div class="details-resume-box-right" >
        <img :src="require('../assets/img/' + tattooer.picture)" width="100%" />
<!--<img src="../assets/img/yohane-braga.jpg"/>-->
      </div>
    </div>
  </Background>
</template>

<script>
import Logo from "../layout/Logo";
import Background from "../layout/Background";

export default {
  components: {
    Logo,
    Background
  },
  computed: {
    listTattooers() {
      return this.$store.state.listTattooers;
    },
    tattooer() {
      let idFiltered = this.$store.state.listTattooers.find(tattooer => {
        return tattooer.id == this.$route.query.id;
      });
      return idFiltered;
    }
  },
  data() {
    return {
      url: '../yohane-braga.jpg' 
    }
  }
};
</script>

<style>
</style>
