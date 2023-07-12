import { transactions } from "../../../db"

const minValueCheck = transactions.reduce((a,b) => {
    if(b.value < a.value) a = b;
    return a;
});

const maxValueCheck = transactions.reduce((a,b) => {
    if(b.value > a.value) a = b;
    return a;
});


const defaultState = {
    filters: {
        tags: [],
        type: "All",
        bankAccount: [],
        creditCard: [],
        user: [],
        costCenter: [],
        dinamicValues: {minValue: minValueCheck.value, maxValue: maxValueCheck.value},
        fixedValues: {minValue: minValueCheck.value, maxValue: maxValueCheck.value}
    }
}

const filters = (state = defaultState, { type, name, filter, minValue, maxValue }) => {
    switch(type) {
        case "CLEAR_ALL_FILTERS":
            return {
                filters: {
                    tags: [],
                    type: "All",
                    bankAccount: [],
                    creditCard: [],
                    user: [],
                    costCenter: [],
                    dinamicValues: {minValue: minValueCheck.value, maxValue: maxValueCheck.value},
                    fixedValues: {minValue: minValueCheck.value, maxValue: maxValueCheck.value}
                }
            }

        case "ADD_FILTER":
            return {
                filters: {
                    ...state.filters,
                    [filter]: [...state.filters[filter], name]
                }
            }
        
        case "TYPE_FILTER":
            return {
                filters: {
                    ...state.filters,
                    type: name
                }
            }
        
            case "VALUE_FILTER":
                return {
                    filters: {
                        ...state.filters,
                        dinamicValues: {minValue, maxValue}
                    }
                }

        case "REMOVE_FILTER":
            return {
                filters: {
                    ...state.filters,
                    [filter]: state.filters[filter].filter(filter => filter !== name)
                }
            }
        
        default:
            return state
    }
}

export default filters