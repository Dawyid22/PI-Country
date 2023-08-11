/* eslint-disable no-case-declarations */
import { GET_COUNTRIES, GET_DETAIL } from '../actions/types'

const globalState = {
    countries: [],
    copyCountries: [],
    detail: {}
}

const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                copyCountries: action.payload
            }

        case GET_DETAIL:
            const countryDetail = state.copyCountries.find((country) => country.id === action.payload);
            return {
                ...state,
                detail: countryDetail,
            }

            
        default:
            return { ...state }
    }
}

export default rootReducer