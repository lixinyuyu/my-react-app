export const reducer = (state, action) => {
    console.log('state', state, 'action', action);
    return Object.assign({}, state, action);
}