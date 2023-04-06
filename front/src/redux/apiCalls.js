import { loginFailure, loginStart, loginSuccess } from "./reducers/userSlice";

import { publicRequest } from "../requestMethods";

// export const login = async (dispatch, user) => {
//   dispatch(loginStart);
//   try {
//     const res = await publicRequest.post("/login", user);
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure);
//   }
// };

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5500/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure);
  }
};

