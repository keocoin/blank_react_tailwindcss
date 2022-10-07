export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import fetchClient from "../hooks/api";

import firebaseConfig from "../../firebase.json";
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(firebaseAuth, googleProvider);
    const firebaseUser = res.user;
    const idToken = await firebaseUser.getIdToken();
    return idToken;
  } catch (err) {
    console.error(err);
  }
};

export const firebaseLogin = () => {
  return async (dispatch: any) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    const idToken = await signInWithGoogle();
    console.log(idToken);

    const postData = {
      provider: "firebase",
      id_token: idToken,
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      data: {
        idToken,
      },
    });

    // fetchClient
    //   .post("/auth", postData)
    //   .then(async (user) => {
    //     dispatch({
    //       type: USER_LOGIN_SUCCESS,
    //       data: user.data.data.user,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: USER_LOGIN_FAILED,
    //     });
    //   });
  };
};
