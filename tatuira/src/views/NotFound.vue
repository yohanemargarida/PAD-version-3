<template>
  
    <div class="page-error background">
      <div class="mask">
        <div class="content-box">
          <div class="text one">
            <p>404</p>
          </div>
          <div class="text two">
            <p>page not found</p>
          </div>
          <router-link :to="{ name: 'home' }" tag="button" class="return" box>
            <img src="../assets/img/icon-voltar.svg" />
            voltar para home
          </router-link>
        </div>
      </div>
    </div>
  
</template>

<script>

export default {
  
};
</script>

<style scoped>
.page-error {
  display: flex;
  background-image: url(../assets/img/error-404.jpg);
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: 110% 48%;
  align-items: center;
  justify-content: center;
}
.mask {
  width: 96%;
  height: 92%;
  background: rgba(0, 212, 187, 0.5);
}
.content-box {
  width: 40%;
  height: 80%;
  margin: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.one {
  height: 35%;
  margin-top: 35px;
}
.one p {
  font-size: 11rem;
  font-weight: 900;
  color: #f1f1e9;
  text-shadow: 0.002em 0.001em 1px #00bea8;
}
.two {
  height: 10%;
  font-size: 1.2rem;
  font-weight: 900;
  word-spacing: 0.5pt;
  bottom: 2%;
  top: -30px;
}
.return {
  width: 60%;
  height: 56px;
  margin-top: 13%;
  border: 2px solid #fff!important;
  background: transparent;
  display: flex;
  justify-content: space-around;
  box-shadow: 0.002em 0.002em 1px #00bea8;
}
[box] {
  color: white;
  border: none;
  padding-top: 4px;
  background: transparent;
  font-size: 15pt;
  font-weight: normal;
}
.return img {
  filter: invert(100%);
  width: 10%;
  margin-left: 4%;
}
</style>