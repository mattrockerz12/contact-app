import * as types from "../actions/actionTypes";

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case types.FETCH_CONTACTS_SUCCESS:
      return action.payload;
    case types.CREATE_CONTACT_SUCCESS:
      return [...state, { ...action.payload }];
    case types.UPDATE_CONTACT_SUCCESS:
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case types.REMOVE_CONTACT_SUCCESS:
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

export default contactReducer;
