import _ from 'lodash';
export default (_actions,crutch) => {
    const actions = _.omit(_actions,'initialState','SET_STATE');
    const initialState = _.extend({},
        _actions.initialState,
        _.zipObject(_.keys(actions),_.map(actions, (f)=>{
            return (p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11)=> {
                crutch.dispatch(f(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11));
            }
            }
        )));
    return (state = initialState, action) => {
        if (action.type && !action.type.indexOf(_actions.SET_STATE)) {
            return _.extend({}, state, action.data)
        }
        return state
    }
};