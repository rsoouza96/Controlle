import { ADD_FILTER, REMOVE_FILTER, CLEAR_ALL_FILTERS, VALUE_FILTER, TYPE_FILTER } from './types'

export const clearFilters = () => {
    return { type: CLEAR_ALL_FILTERS }
}

export const typeFilter = (name) => {
    return { type: TYPE_FILTER, name }
}

export const addFilter = (name, filter) => {
    return { type: ADD_FILTER, name: name, filter: filter }
}

export const removeFilter = (name, filter) => {
    return { type: REMOVE_FILTER, name: name, filter: filter }
}

export const valueFilter = (min, max) => {
    return { type: VALUE_FILTER, minValue: min, maxValue: max }
}