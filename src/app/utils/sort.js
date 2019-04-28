export default (list, field) => {
    let fieldName = field.replace('-', '');
    let reversed = field[0] === '-';
    let ret = list.sort((a, b) => {
      let aF = a[fieldName];
      let bF = b[fieldName];
      return aF > bF ? 1 : (aF === bF ? 0 : -1);
    });
  
    return reversed ? ret.reverse() : ret;
  };