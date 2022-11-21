


const initialState = {
    start: false,
    success: false,
    categories: [],
    fail: false,
    errorMasagge: ""
}


const categoriesReducer = (state = initialState, action) => {
  // // if ile yazilacaksa bu sekilde yazilmali;
  // if(action.type === "FETCH_CATEGORIES_STATE") {
  //   return{
  //     ...state,
  //        start: true,
  //   };    
  // }
  // if(action.type === "FETCH_CATEGORIES_SUCCESS") {
  //   return{
  //      ...state,
  //       start:false,
  //       seccess:true,
  //       categories: action.payload

  //   };
  // }
  // if(action.type === "FETCH_CATEGORIES_FAIL"){
  //   return{
  //          ...state,
  //         start: false,
  //         fail: true,
  //         errorMasagge: action.payload,
  //   };
  // }
  // return state

 // Switch ile yazilacaksa bu sekilde yazilmali:
  switch(action.type) {
    case "FETCH_CATEGORIES_START":
    return {
        ...state,
        start:true
    };
     case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        start:false,
        success:true,
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