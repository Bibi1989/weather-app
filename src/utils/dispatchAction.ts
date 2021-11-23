import { Dispatch } from "redux";

import {
  getWeathersFromYourLocation,
  getWeathers,
} from "redux/slices/weathers/weatherActions";
import { CoordInterface } from "typescript/weather.types";

export const dispatchActions = (
  dispatch: Dispatch<any>,
  units: string,
  coord: CoordInterface,
  condition: boolean
) => {
  if (condition) {
    dispatch(
      getWeathersFromYourLocation({
        units,
        coord: { long: coord.long, lat: coord.lat },
      })
    );
  } else {
    dispatch(getWeathers({ units }));
  }
};
