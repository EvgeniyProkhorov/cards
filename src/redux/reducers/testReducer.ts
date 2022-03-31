type TestReducer = {

}

type ActionType = {
    type: 'TEST'
}

const initState = {

}

export const testReducer = (state:TestReducer = initState, action: ActionType) => {
    switch(action.type){
        case "TEST":
            return state
        default:
            return state
    }
}