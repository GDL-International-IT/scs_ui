const defaultState = {
    isAuth: false,
    activeComponent: ''
}

const LOGIN = 'LOGIN'
const CHANGE_COMPONENT = 'CHANGE_COMPONENT'

export const reducer = (state = defaultState, action) => {
    switch (action.type){
        case LOGIN:
            return {...state, isAuth: action.payload}
        case CHANGE_COMPONENT:
            return {...state, activeComponent: action.payload}
        default:
            return state
    }
}

export const loginAction = (bool) => ({type: LOGIN, payload: bool})
export const changeComponentAction = (component) => ({type: CHANGE_COMPONENT, payload: component})
