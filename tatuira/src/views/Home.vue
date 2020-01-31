<template>
  <div id="app">
    <div class="background page-home">
      <div class="body-border">
        <div class="left box">
          <div class="logo">
            <img src="../assets/img/logo.png" width="50%" />
          </div>
          <div class="content-box">
            <div class="text one">
              <p>te conectando com os melhores tatuadores.</p>
            </div>
            <div class="text two">
              <p>
                O
                <strong>tatuíra</strong> é uma rede que ajuda você a encontrar o melhor artista para
                fazer sua tatuagem.
              </p>
            </div>
            <div class="search-box">
              <div class="icon-search">
                <img src="../assets/img/icon-busca.svg" width="100%" />
              </div>
              <input
                v-model="inputName"
                type="text"
                placeholder="digite sua busca"
                class="input-search"
              />
              <button
                :disabled="!inputName"
                @click="search"
                id="send"
                class="button-search"
                type="button"
              >buscar</button>
            </div>
          </div>
        </div>

        <div class="result" v-if="listTattooersFiltered.length && searched">
          <ul v-for="item in listTattooersFiltered" :key="item.id">
            <li>{{item.name}}</li>
          </ul>
        </div>

        <div class="result" v-else-if="searched && !listTattooersFiltered.length">
          <h4>Nome não encontrado: {{inputName}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputName: "",
      searched: false,
      listTattooers: [
        {
          id: 1,
          name: "Yohane Braga",
          instagram: "http://www.yohane.com.br",
          city: "Rio de Janeiro"
        },
        {
          id: 2,
          name: "Brian Gomes",
          instagram: "http://www.instagram.com/briangomes/",
          city: "São Paulo"
        },
        {
          id: 4,
          name: "Chiquinho Gomes",
          instagram: "https://www.instagram.com/chiquinhogtattoo",
          city: "São Paulo"
        }
      ]
    };
  },
  computed: {
    listTattooersFiltered() {
      if (this.searched) {
        let filtered = this.listTattooers.filter(tattooer => {
          return tattooer.name
            .toLowerCase()
            .includes(this.inputName.toLowerCase());
        });
        filtered = filtered.sort((a, b) => {
          return a.name.charAt() == b.name.charAt()
            ? 0
            : a.name.charAt() > b.name.charAt()
            ? 1
            : -1;
        });
        return filtered;
      }
      return [];
    }
  },
  methods: {
    search() {
      this.searched = true;
    }
  },
  watch: {
    inputName() {
      this.searched = false;
    }
  }
};
</script>

<style lang="scss">
$primary-color: #00d4bb;
$font-stack: 'Kastelov Axiforma';
.page-home {
  display: flex;
  background-image: url(../assets/img/fundo3.png);
  background-size: 127%;
  background-repeat: no-repeat;
  background-position: 80% 35%;
}
.left {
  margin-left: 2.2%;
  height: 70%;
  margin-top: 8%;
  width: 43%;
}
.result {
  background: rgba(241, 241, 233, 0.9);
  height: 100%;
  width: 54%;
}
.one {
  width: 80%;
  height: 45%;
  color: #00d4bb;
  font-size: 45pt;
  line-height: 36pt;
  font-weight: 900;
  padding-top: 3%;
}
.two {
  width: 68%;
  height: 22%;
  top: 0;
  font-size: 20pt;
  font-weight: 700;
  line-height: 20pt;
  letter-spacing: 0px;
  word-spacing: 0.5pt;
}
.logo {
  width: 98%;
  height: 20%;
}
.content-box {
  width: 83%;
  height: 80%;
  margin-left: 17%;
  display: flex;
  flex-direction: column;
}
.search-box {
  width: 80%;
  height: 45px;
  margin-top: 12%;
  border: #00d4bb solid 1px;
  display: flex;
  justify-content: space-around;
}
.icon-search {
  width: 6%;
  height: 100%;
  float: left;
  margin-top: 2.5%;
  margin-left: 2%;
}
.input-search {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background: transparent;
  border: none;
  padding-top: 2px;
  padding-left: 7px;
}
.button-search {
  width: 24%;
  height: 100%;
  color: white;
  border: none;
  padding-top: 2px;
  background: #00d4bb;
  font-size: 15pt !important;
  font-weight: normal;
  font-family: $font-stack;
}
strong {
  font-weight: 900;
}
::-webkit-input-placeholder {
  color: #aaa;
  font-family: $font-stack;
  font-weight: normal;
  font-size: 19pt;
}
@media (max-width: 768px) {
  .background {
    background-size: 500%;
    background-position: 60%;
  }

  .body-border {
    border: 25px solid rgba(0, 212, 187, 0.5);
    flex-direction: column;
  }
  .left {
    width: 100%;
    height: 80%;
  }
  .one {
    font-size: 20pt;
    line-height: 20pt;
    padding-top: 0%;
  }
  .two {
    font-size: 15pt;
    line-height: 15pt;
    text-shadow: 0.1em 0.1em 0.5px #aaa;
  }
}

@media (min-width: 1024px) {
  .one {
    font-size: 31pt;
    line-height: 29pt;
  }
  .two {
    font-size: 14pt;
    line-height: 15pt;
  }
  .button-search {
    font-size: 12pt;
    font-weight: normal;
  }
  ::-webkit-input-placeholder {
    font-size: 15pt;
  }
}
</style>
