import _ from 'lodash';
export default (cnt, size) => {
    //планеты 1 свободная клетки в стороны
    //
    const res = {};
    while (_.size(res) < cnt) {
        res[_.random(0, size - 1) + '_' + _.random(0, size - 1)] = 1;
    }
    return res
}