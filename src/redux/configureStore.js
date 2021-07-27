import { combineReducers, createStore, applyMiddleware, compose } from "redux";

export const ADD_MEAL = 'ADD MEAL'
export const addMeal = (food) => {
    return {
        type: ADD_MEAL,
        payload: food
    }
}

export const DELETE_MEAL = 'DELETE MEAL'
export const deleteMeal = () => {
    return {
        type: DELETE_MEAL
    }
}


export const mealReducer = (state = ['hot dog'], action) => {
    console.log("MealReducer", action)
    if (action.type === ADD_MEAL) {
        const newState = [...state]
        newState.push(action.payload)
        return newState
    } else if (action.type === DELETE_MEAL) {
        const newState = [...state]
        newState.pop()
        return newState
    } 
    else {
        return state
    }
}

export const testReducer = (state="hi", action) => {
    console.log("testReducer", action)
    return state
}

export const allReducers = combineReducers({
    userMeals: mealReducer,
    testReducer: testReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const myStore = createStore(allReducers, composeEnhancer(applyMiddleware()))