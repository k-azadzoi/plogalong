import { FLASH } from '../actionTypes';

import $M from '../../constants/Messages';


const initialState = {
  /** @type {{ text: string, stamp: number, options: any }} */
  flashMessage: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  default:
    const actionMessage = $M[type];

    if (!actionMessage)
      return state;

    const originalPayload = payload;
    if (typeof actionMessage === 'string')
      payload = { text: actionMessage };
    else
      payload = actionMessage;
  case FLASH:
    return { ...state, flashMessage: payload };
  }
};
