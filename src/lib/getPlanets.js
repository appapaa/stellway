import _ from 'lodash';
const usersPos=[
    {x:0.29,y:0},
    {x:0.71,y:0},
    {x:1,y:0.29},
    {x:1,y:0.71},
    {x:0.29,y:1},
    {x:0.71,y:1},
    {x:0,y:0.29},
    {x:0,y:0.71}
];
export default (planets, size) => {
    const res = {};
    const cnt = _.size(planets);
   _.forEach(_.sortBy(usersPos,()=>Math.random()).slice(0,cnt),({x,y},i)=>res[Math.floor(x*size)]=planets[i]);
    return res;
};