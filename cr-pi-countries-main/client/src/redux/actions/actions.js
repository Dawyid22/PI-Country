import { GET_COUNTRIES, GET_DETAIL, FILTER, FILTERPOPULATION, FILTERNAME, FILTERCOUNTRIESBYNAME, GET_ACTIVITY, FILTERACTIVITIESBYNAME } from "./types";
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

export const filteredCountriesByName = (name) =>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/name?name=${name}`)
            return dispatch({type: FILTERCOUNTRIESBYNAME, payload: data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterByContinents = (continent) => {
    return {
        type: FILTER,
        payload: continent
    }
}

export const filterByPopulation = (population) => {
    return {
        type: FILTERPOPULATION,
        payload: population
    }
}

export const filteredByName = (name) => {
    return {
        type: FILTERNAME,
        payload: name
    }
}

export const getActivities = () => {
    const endpoint = "http://localhost:3001/activities"
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            return dispatch({ type: GET_ACTIVITY, payload: response.data })
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteActivity = (id) => {
    const endpoint = `http://localhost:3001/activities/${id}`
    return async () => {
        try {
            const response = await axios.delete(endpoint)
         alert(response.data.message)
        } catch (error) {
            console.log(error);
        }
    }
}

export const postActivities = (state) => {
    const endpoint = "http://localhost:3001/activities"
    return async () => {
        try {
            await axios.post(endpoint, state)
            alert("Successfully created activity")
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterActivitiesByName = (name) => {
    return {
        type: FILTERACTIVITIESBYNAME,
        payload: name
    }
}



