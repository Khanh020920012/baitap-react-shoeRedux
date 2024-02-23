import { ADD_SHOE, DELETE_SHOE, VIEW_DETAIL } from "./constant";

export let viewDetailAction = (shoe) => {
  return {
    type: VIEW_DETAIL,
    payload: shoe,
  };
};
export let addShoeAction = (payload) => ({
  type: ADD_SHOE,
  payload,
});

export let deleteAction = (id) => ({
  type: DELETE_SHOE,
  payload: id,
});
