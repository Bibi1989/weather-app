import { useEffect, useState } from "react";

export const useLocation = () => {
  const [state, setState] = useState<number[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setState([position.coords.longitude, position.coords.latitude]);
    });
  }, []);

  return state;
};
