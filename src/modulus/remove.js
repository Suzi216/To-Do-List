// remove a TODO
const remove = (id) => {
  // remove object from list
  let arr = [];
  arr = JSON.parse(localStorage.getItem('ls'));
  arr.splice(id, 1);
  const update = arr.filter((n, index) => {
    if (n.index !== index) {
      n.index = index;
    }
    return n;
  });
  localStorage.setItem('ls', JSON.stringify(update));
};

export default remove;
