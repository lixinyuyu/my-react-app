const initState = {
    count: 0,
}
export const reducer = (state = initState, action) => {
    console.log('state', state, 'action', action);
    // return Object.assign({}, state, action);
    switch (action.type) {
        case 'send_test':
            return {
                count: state.count + 1,
            }
        default:
            return state;
    }
}