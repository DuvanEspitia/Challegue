import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  username: null,
  lastVisitedPage: '/',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      };
    case 'SET_LAST_VISITED_PAGE':
      return {
        ...state,
        lastVisitedPage: action.payload.lastVisitedPage,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (username) => {
    dispatch({ type: 'LOGIN', payload: { username } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const setLastVisitedPage = (lastVisitedPage) => {
    dispatch({ type: 'SET_LAST_VISITED_PAGE', payload: { lastVisitedPage } });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, login, logout, setLastVisitedPage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
