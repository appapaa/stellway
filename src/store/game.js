import getRange from "../lib/getRange";

export const SET_STATE = 'SET_GAME';
const METEOR_ON_MAP = 0.1;
export const initialState = {
    size: 16,
    userCnt: 2,
    planetCntForUser:1,
    spaceObj:{}
};
export const setParams = (data) => {
    return {
        type: SET_STATE,
        data: data
    }
};
export const generateGame = (data) => (dispatch,getState)=>{
    const {userCnt,planetCntForUser,size} = getState().game;
    const cnt = userCnt*planetCntForUser;
    const meteorCnt = Math.floor(size*size*METEOR_ON_MAP);
    // const meteorCnt = 5;
    const spaceObj = getRange(cnt+meteorCnt,size);
    dispatch({
        type: SET_STATE,
        data: {spaceObj}
    })
};