import { bindActionCreators } from "redux";
import actionTypes from "./actionTypes";
import store from "../store";

const setViewType = (value) => ({
  type: actionTypes.setViewType,
  value,
});

const setContacts = (data) => ({
  type: actionTypes.setContacts,
  data,
});

const boundCommonActions = bindActionCreators(
  {
    setViewType,
    setContacts,
  },
  store.dispatch
);

export default boundCommonActions;
