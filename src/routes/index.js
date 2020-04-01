module.exports = [
  './todo_get',
  './todo_post',
  './todo_delete'
].map((elem) => require(elem))