import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const loginWithEmailAndPassword = (email, password) => async (dispatch) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: 'LOGIN_SUCCESS' ,payload: 'Login successful!'});
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'LOGOUT_FAILURE', payload: error.message });
  }
};
