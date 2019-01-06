//action type
export const SHOW_MESSAGE = 'SHOW_MESSAGE'

//action
export const showMessage = (message) => ({
    type: SHOW_MESSAGE,
    message: message
})

export function showGrowl(message) {
    return showMessage(message);
}