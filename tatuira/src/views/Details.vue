<template>
  <Background>
    <div class="details-page">
      <div class="content details-content-box-left">
        <div class="details-topo">
          <Logo logo />
          <router-link :to="{ name: 'home' }" tag="button" class="details-return-button">
            
              <img src="../assets/img/icon-voltar.svg" />
              voltar
            
          </router-link>
        </div>
        <div class="details-tattooer">
          <h1 class="details-tattooer-name">Yohane Braga</h1>
          <p class="details-tattooer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            luctus urna vel eleifend convallis. Aenean sed purus neque. Sed ante ipsum, volutpat et ex
            in, scelerisque ullamcorper sem. Pellentesque ut porta quam, sed commodo neque. Curabitur
            elit mauris, accumsan id mattis feugiat, aliquam at justo. Vivamus id sem a quam efficitur
            interdum
          </p>
          <p class="details-tattooer-city">cidade</p>
          <a href class="details-tattooer-website">website</a>
          <p>rota {{$route.query.id}} // {{getRouteId()}}</p>
        </div>
      </div>

      <div class="details-resume-box-right">
        <img src="../assets/img/yohane-braga.jpg" width="100%" />
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
    listTattooersFiltered() {
      return this.$store.getters.listTattooersFiltered;
    }
  },
  methods: {
    getRouteId() {
      var id = this.$route.query.id;
      return id;
    }
  }
};
</script>

<style>
</style>
