<template>
  <Background>
    <div class="home-page">
      <div class="home-content-box">
        <div class="home-logo">
          <img src="../assets/img/logo.png" width="50%" />
        </div>
        <div class="home-text-box">
          <div class="home-brand-description-one">
            <p>te conectando com os melhores tatuadores.</p>
          </div>
          <div class="home-brand-description-two">
            <p>
              O
              <strong>tatuíra</strong> é uma rede que ajuda você a encontrar o melhor artista para
              fazer sua tatuagem.
            </p>
          </div>
          <InputSearch />
        </div>
      </div>
      <ResultSearch />
    </div>
  </Background>
</template>

<script>
import Background from "../layout/Background";
import InputSearch from "../components/InputSearch";
import ResultSearch from "../components/ResultSearch";

export default {
  components: {
    Background,
    InputSearch,
    ResultSearch
  }
};
</script>

<style lang="scss">
</style>
