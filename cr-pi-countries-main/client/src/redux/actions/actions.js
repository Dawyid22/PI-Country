import { GET_COUNTRIES, GET_DETAIL } from "./types";
import axios from 'axios'


export const getCountries = () => {
    const endpoint = "http://localhost:3001/countries"
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            return dispatch({ type: GET_COUNTRIES, payload: response.data })

        } catch (error) {
            console.log(error);
        }
    }
}

export const getDetail = (id) => {
    const endpoint = "http://localhost:3001/countries/" + id
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            const { id } = response.data
            return dispatch({ type: GET_DETAIL, payload: id })
        } catch (error) {
            console.log(error);
        }
    }
}