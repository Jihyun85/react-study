import React, { createContext, useContext, useReducer } from "react";
import createAsyncDispatcher from "./asyncActionUtils";
import * as api from "./api";

const initialState = {
  users: {
    loading: false,
    error: null,
    data: null,
  },
  user: {
    loading: false,
    error: null,
    data: null,
  },
};

const loadingState = {
  loading: true,
  error: null,
  data: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: loadingState,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };
    case "GET_USERS_ERROR":
      return {
        ...state,
        users: error(action.error),
      };
    case "GET_USER":
      return {
        ...state,
        user: loadingState,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: success(action.data),
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        user: error(action.error),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const usersStateContext = createContext(null);
const usersDispatchContext = createContext(null);

export function UsersProider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <usersStateContext.Provider value={state}>
      <usersDispatchContext.Provider value={dispatch}>
        {children}
      </usersDispatchContext.Provider>
    </usersStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(usersStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(usersDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}

export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);
