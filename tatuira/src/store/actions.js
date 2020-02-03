export default {
    setInputName(context, payload) {
        context.commit("SET_INPUTNAME", payload);
    },
    setSearched(context, payload) {
        context.commit("SET_SEARCHED", payload);
    },
    setListTattooers(context, payload) {
        context.commit("SET_LIST_TATTOOERS", payload);
    }

};