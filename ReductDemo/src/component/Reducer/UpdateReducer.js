export const types = Object.freeze({
    updateTitle: 'UpdateTitle'
});

const DEFAULT_VALUE = {
    title : 'Jing'
}

export default updatReducer = (state = DEFAULT_VALUE, action ) => {
    switch (action.type) {
        case types.updateTitle:
            return {
                ...state,
                title: action.payload
            }

        default:
            return state
    }

}
