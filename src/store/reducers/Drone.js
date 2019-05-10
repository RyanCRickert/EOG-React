import * as actions from "../actions";

const initialState = [];

const fetchDroneData = (state, action) => {
  return {
    ...state,
    drone: action.drone
  };
};

const handlers = {
  [actions.FETCH_DRONE_DATA]: fetchDroneData
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
