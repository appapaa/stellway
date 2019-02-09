import getRange from "../lib/getRange";
import _ from "lodash";

export const SET_STATE = 'SET_GAME';
const METEOR_ON_MAP = 0.1;
export const initialState = {
    size: 16,
    userCnt: 2,
    planetCntForUser:1,
    spaceObj:{},
    mapGegs:{},
    ships:{},
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
    const planetsObj = getP;anets(cnt+meteorCnt,size);
    const mapShip = getRange(cnt,size);
    const mapGegs = {};
    _.forEach(_.range(size),(x)=>{
        _.forEach(_.range(size),(y)=> {
            mapGegs[x+'_'+y] = 1;
        });
    });
    dispatch({
        type: SET_STATE,
        data: {spaceObj,mapGegs,mapShip}
    })
};