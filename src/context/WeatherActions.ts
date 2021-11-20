export const GET_WEATHERS = "GET_WEATHERS";
export const LOADING = "LOADING";

export const getWeathersAction = <T>(payload: T) => {
  return {
    type: GET_WEATHERS,
    payload,
  };
};

export const loadingAction = (payload: boolean) => {
  return {
    type: LOADING,
    payload,
  };
};
