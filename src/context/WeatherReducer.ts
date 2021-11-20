import { InitialState } from "./WeatherProvider";
import { GET_WEATHERS, LOADING } from "./WeatherActions";

type Action = {
  type: string;
  payload: any;
};

export const WeatherReducer = (
  state: InitialState,
  { type, payload }: Action
) => {
  switch (type) {
    case GET_WEATHERS:
      return {
        ...state,
        weathers: payload,
      };
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
