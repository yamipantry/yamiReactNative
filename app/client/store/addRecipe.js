import axios from 'axios'
import { webserver } from '../../../helperfunction'

const ADD_RECIPE = 'ADD_RECIPE'

export const addRecipe = recipe => ({
    type: ADD_RECIPE,
    recipe
})

export const addRecipeAction = (obj) => async dispatch => {
    try {
        const {data} = await axios.post(`${webserver}/api/recipe`, obj)
    } catch (err) {
        console.error 
    }
}

const initialState = []

const addedRecipe = (state=initialState, action) => {
    switch(action.type){
        default: return state
    }
}

export default addedRecipe
