import { types } from '../Reducer/UpdateReducer'

export const updateTitle = (title) => ({
    type: types.updateTitle,
    payload: title,
});

export default {
    updateTitle
};