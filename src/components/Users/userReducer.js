import { GET_USERS, DELETE_USER } from './userActions';
export const reducer = (state, action) => {
  if (action.type === GET_USERS) {
    return { ...state, Userdata: action.payload }
  }

  if (action.type === DELETE_USER){
    return {
      ...state,
      Userdata: state.Userdata.filter((user) => user.id !== action.payload),
    }
  
  return state
}