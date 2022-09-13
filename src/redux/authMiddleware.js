import { authAction, setUserData, setAuthState } from "./actions";
import { authRequest } from "./authRequest";

export const authMiddleware = (store) => (next) => async (action) => {
  if(action.type === authAction.type) {
    const email = action.payload.payloadEmail;
    const password = action.payload.payloadPassword;
    const success = await authRequest(email, password); 
    const payload = {
      email, password
    };

    if (success) {
      store.dispatch(setAuthState(true));
      store.dispatch(setUserData(payload))
    }

  } else {
    next(action);
  }
}
