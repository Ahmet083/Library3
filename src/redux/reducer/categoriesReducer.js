


const initialState = {
    start: false,
    success: false,
    categories: [],
    fail: false,
    errorMasagge: ""
}


const categoriesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETC_CATEGORIES_STATE":
    return {
        ...state,
        start:true
    };
     case "FETC_CATEGORIES_SUCCESS":
      return {
        ...state,
        start:false,
        seccess:true,
        categories: action.payload
      };
      case "FETCH_CATEGORIES_FAIL":
        return {
          ...state,
          start: false,
          fail: true,
          errorMasagge: action.payload,

        }
    default:
        return state;
  }
};

export default categoriesReducer