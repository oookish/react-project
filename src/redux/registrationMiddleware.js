import { registrationAction, setUserData, setAuthState } from "./actions";
import { registrationRequest } from "./registrationRequest";

export const registrationMiddleware = (store) => (next) => async (action) => {
  if (action.type === registrationAction) {
    const { payloadEmail, payloadPassword, payloadName, payloadSurname } =
      action.payload;
    const success = await registrationRequest(
      payloadEmail,
      payloadPassword,
      payloadName,
      payloadSurname
    );
    const payload = {
      email: payloadEmail,
      password: payloadPassword,
      name: payloadName,
      surname: payloadSurname,
    };

    if (success) {
      store.dispatch(setAuthState(true));
      store.dispatch(setUserData(payload));
    }
  } else {
    next(action);
  }
};
