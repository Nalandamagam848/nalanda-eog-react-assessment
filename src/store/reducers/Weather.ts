import * as actions from "../actions";

const initialState = {
  temperatureinCelsius: null,
  temperatureinFahrenheit: null,
  description: "",
  locationName: ""
};

const toF = (c: any) => (c * 9) / 5 + 32;

const weatherDataRecevied = (state: any, action: any) => {
  const {getWeatherForLocation} = action;
  const {
    description,
    locationName,
    temperatureinCelsius
  } = getWeatherForLocation;

  return {
    temperatureinCelsius,
    temperatureinFahrenheit: toF(temperatureinCelsius),
    description,
    locationName
  };
};

const handlers: any = {
  [actions.WEATHER_DATA_RECEIVED]: weatherDataRecevied
};

export default (state = initialState, action: any) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action)
      ;
};
