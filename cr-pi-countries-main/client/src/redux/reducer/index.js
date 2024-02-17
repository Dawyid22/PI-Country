/* eslint-disable no-case-declarations */
import { GET_COUNTRIES, GET_DETAIL, FILTER, FILTERPOPULATION, FILTERNAME, FILTERCOUNTRIESBYNAME, GET_ACTIVITY, FILTERACTIVITIESBYNAME } from '../actions/types'

const globalState = {
    countries: [],
    copyCountries: [],
    detail: {},
    allActivities: [],
    copyAllActivities: []
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

        case FILTER:
            const copyCountries2 = state.countries
            const copyFiltered = copyCountries2.filter(contry => contry.continent === action.payload)
            return {
                ...state,
                copyCountries: action.payload === "Default" ? [...state.countries] : copyFiltered
            }

        case FILTERPOPULATION:
            const copyCountries = [...state.copyCountries]

            if (action.payload === "Mayor") {
                copyCountries.sort((a, b) => b.population - a.population)

            } else if (action.payload === "Menor") {
                copyCountries.sort((a, b) => a.population - b.population)
            }

            const filterP = action.payload === "Default" ? [...state.countries] : copyCountries
            return {
                ...state,
                copyCountries: filterP
            }

        case FILTERNAME:
            const copyName = [...state.copyCountries]

            if (action.payload === "A") {
                copyName.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload === "Z") {
                copyName.sort((a, b) => b.name.localeCompare(a.name))
            }

            const filterName = action.payload === "Default" ? [...state.countries] : copyName
            return {
                ...state,
                copyCountries: filterName
            }

        case GET_ACTIVITY:
            return {
                ...state,
                allActivities: action.payload,
                copyAllActivities: action.payload
            }

        case FILTERACTIVITIESBYNAME:
            const copyActivities = [...state.copyAllActivities]
            const copyFilter = copyActivities.filter(elem => elem.name === action.payload)
            return {
                ...state,
                allActivities: action.payload !== "Default" ? copyFilter : state.copyAllActivities
            }

        case FILTERCOUNTRIESBYNAME:
            return{
                ...state,
                copyCountries: action.payload
            }

        default:
            return { ...state }
    }
}

export default rootReducer