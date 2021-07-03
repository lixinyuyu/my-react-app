export const sendAction = () => {
    return {
        type: 'send_type',
        value: '我是action信息---value',
    }
}

export const secondSendAction = () => {
    // action中type是必须的
    return {
        type: 'second',
        value: '我是第二个',
    }
}