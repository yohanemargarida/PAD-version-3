<template>
  <div>
    <div class="background page-details">
      <div class="body-border">
        <div class="left-box">
          <div class="topo">
            <div class="logo">
              <img src="../assets/img/logo.png" width="50%" />
            </div>
            <div class="button-return" id="app1">
              <img src="../assets/img/icon-voltar.svg" />
              <button id="send">voltar</button>
            </div>
          </div>
          <div class="details-tattooer">
            <h1 class="name">Yohane Braga</h1>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              luctus urna vel eleifend convallis. Aenean sed purus neque. Sed ante ipsum, volutpat et ex
              in, scelerisque ullamcorper sem. Pellentesque ut porta quam, sed commodo neque. Curabitur
              elit mauris, accumsan id mattis feugiat, aliquam at justo. Vivamus id sem a quam efficitur
              interdum
            </p>
            <p class="city">cidade</p>
            <a href class="website">website</a>
          </div>
        </div>
        <div class="right-box">
          <img src="../assets/img/yohane-braga.jpg" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page-details {
  background: #f1f1e9;
}
.left-box {
  width: 48%;
  height: 100%;
}
.right-box {
  width: 40%;
  height: 100%;
}
.right-box {
  overflow: hidden;
}
.topo {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  margin: 5%;
  padding: 1%;
}
.logo {
  width: 50%;
  height: auto;
}
.button-return {
  width: 17%;
  height: 40px;
  border: 2px solid #00d4bb;
  background: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  top: 10px;
}
.button-return img {
  filter: invert(70%);
  width: 20%;
  margin-left: 6%;
}
.button-return button {
  width: 100%;
  height: 100%;
  color: #888782;
  border: none;
  background: transparent;
  font-size: 11pt !important;
  font-weight: normal;
  font-family: "Kastelov Axiforma", cursive;
}
.details-tattooer {
  width: 80%;
  height: 70%;
  margin-left: 15%;
  position: relative;
  top: 0px;
}
.name {
  width: 50%;
  font-size: 2.9rem;
  color: #00d4bb;
  font-weight: 700;
  line-height: 44px;
}
.description {
  font-size: 0.9rem;
}
.website {
  color: #00d4bb;
  font-weight: 700;
}
.city {
  font-weight: 700;
}
</style>
