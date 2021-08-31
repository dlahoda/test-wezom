import actionTypes from "./actionTypes";

const initialState = {
  viewType: "table",
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.setViewType: {
      return {
        ...state,
        viewType: action.value,
      };
    }
    case actionTypes.setContacts: {
      return {
        ...state,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
