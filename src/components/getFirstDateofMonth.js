import moment from 'moment';
const getFirstDateofMonth = () => {
  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  var firstDay = new Date(y, m, 1);
  console.log('first day is ===>', firstDay);
  return firstDay;
};

export {getFirstDateofMonth};
