import {
    getDataActionType,
} from "../actions/actionTypes";
import { initialStates } from "./initialState";

export default function reducer(state = initialStates.tournaments, action) {
    switch (action.type) {
        case getDataActionType.GET_DATA: {
            return {
                ...state,
                tournaments: action.payload,
            };
        }
        case getDataActionType.DELETE_ITEM: {
            return {
                ...state,
                tournaments: state.tournaments.filter(({ id }) => id !== action.payload),
              };
        }
        case getDataActionType.CLEAR_REDUCER: {
            return {
                tournaments: []
            }
        }
        default:
            return state;
    }
}
