export default function (state = {}, action) {
    switch (action.type) {
      case "START_LOADING":
        return {
          ...state,
          loading: true,
        };
      case "STOP_LOADING":
        return {
          ...state,
          loading: false,
        };
        case "LOADED":
            return {
              ...state,
              loaded: true,
            };
            case "NOT_LOADED":
                return {
                  ...state,
                  loaded: false,
                };
                case "INVALID_CITY":
                    return {
                      ...state,
                      loadedInvalidCity: true,
                    };
                    case "VALID_CITY":
                        return {
                          ...state,
                          loadedInvalidCity: false,
                        };
      default:
        return state;
    }
  }
  