export default function (state = {}, action) {
    switch (action.type) {
      case "CHANGE_CURRENT_WEATHER_LOCATION":
        console.log(state);
        return {
          ...state,
          weather: action.payload
        };
      default:
        return state;
    }
  }
  