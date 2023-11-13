const defaultState = {
    isAuth: false,
    activeComponent: '',
    activeLabel: '',
    isLabelGrabbed: false,
}

const LOGIN = 'LOGIN'
const CHANGE_COMPONENT = 'CHANGE_COMPONENT'
const ACTIVE_LABEL = 'ACTIVE_LABEL'
const GRAB_LABEL = 'CRAB_LABEL'

export const reducer = (state = defaultState, action) => {
    switch (action.type){
        case LOGIN:
            return {...state, isAuth: action.payload}
        case CHANGE_COMPONENT:
            return {...state, activeComponent: action.payload}
        case ACTIVE_LABEL:
            return {...state, activeLabel: action.payload}
        case GRAB_LABEL:
            return {...state, isLabelGrabbed: action.payload}
        default:
            return state
    }
}

export const loginAction = (bool) => ({type: LOGIN, payload: bool})
export const changeComponentAction = (component) => ({type: CHANGE_COMPONENT, payload: component})
export const changeActiveLabelAction = (id) => ({type: ACTIVE_LABEL, payload: id})
export const grabLabelAction = (bool) => ({type: GRAB_LABEL, payload: bool})
