function onlyUnique(el, index, self) {
  return self.findIndex(item => item.id === el.id) === index;
}

export default array => array.filter((el, i) => onlyUnique(el, i, array));
