export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "ADD_REFRESH_TOKEN":
      return {
        ...state,
        refreshToken: action.payload,
      };

    default:
      return state;
  }
}
