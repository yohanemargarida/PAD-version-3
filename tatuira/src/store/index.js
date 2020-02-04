import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        inputName: '',
        searched: false,
        listTattooers: [{
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
    },
    getters: {
        listTattooersFiltered(state) {
            if (state.searched) {
                let filtered = state.listTattooers.filter(tattooer => {
                    return tattooer.name
                        .toLowerCase()
                        .includes(state.inputName.toLowerCase());
                });
                filtered = filtered.sort((a, b) => {
                    return a.name.charAt() == b.name.charAt() ?
                        0 :
                        a.name.charAt() > b.name.charAt() ?
                        1 :
                        -1;
                });
                return filtered;
            }
            return [];
        }
    },
    mutations: {
        setInputName(state, payload) {
            state.inputName = payload
        }
    },
    actions: {
        setInputName(context, payload) {
            context.commit('setInputName', payload)
        }
    }
})