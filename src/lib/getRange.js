import _ from 'lodash';
export default (cnt,sizeX,sizeY = sizeX) => {
    const res = {};
    while (_.size(res) < cnt){
        res[_.random(0,sizeX-1)+'_'+_.random(0,sizeY-1)] = 1;
    }
    return res
}