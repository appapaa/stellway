export const SET_STATE = 'SET_USERS';

export const initialState = {
    source:[]
};
export const addUser = (data) => {
    return {
        type: SET_STATE,
        data: data
    }
};