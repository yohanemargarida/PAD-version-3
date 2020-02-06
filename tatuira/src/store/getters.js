export default {
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
}