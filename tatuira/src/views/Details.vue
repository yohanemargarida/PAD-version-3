<template>
  <Background>
    <div class="details-page">
      <div class="details-resume-box-left">
        <div class="details-topo">
          <div class="details-logo">
            <img src="../assets/img/logo.png" width="50%" />
          </div>
          <router-link :to="{ name: 'home' }" tag="button" class="details-return-button">
            <div >
              <img src="../assets/img/icon-voltar.svg" />
              voltar
            </div>
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
        </div>
      </div>

      <div class="details-resume-box-right">
        <img src="../assets/img/yohane-braga.jpg" width="100%" />
      </div>
    </div>
  </Background>
</template>

<script>
import Background from "../layout/Background";

export default {
  components: {
    Background
  }
};
</script>

<style>
</style>
