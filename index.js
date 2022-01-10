// IMPORTAR REDUX E CREATE STORE

const redux = require("redux");
const createStore = redux.createStore;

// ACTIONS e ACTIONS TYPE

const CHANGE_USER = "CHANGE_USER";
const LOGOUT = "LOGOUT";


function changeUser(user) {
    return {
        type: CHANGE_USER,
        info: "change current user",
        payload: user
    }

}

function logOut () {

    return {
        type: LOGOUT,
        info: "logout current user"
    }
}

// ESTADO INICIAL

const initialState = {
    user: "",
    isLogged: false
}

// REDUCERS

function userReducer(prevState = initialState, action) {
    switch(action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return {
                ...prevState,
                user: "",
                isLogged: false
            }
        default:
            return prevState
    }
}

// STORE

const store = createStore(userReducer);

// CONSOLE

console.log("Estado inicial", store.getState());
store.dispatch(changeUser("Fulano432"));
console.log("Novo estado", store.getState());
store.dispatch(logOut());
console.log("Novo estado", store.getState());