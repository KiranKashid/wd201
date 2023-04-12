const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  };
  const markAsComplete = (index) => {
    all[index].completed = true
  };
  

  const overdue = () => {
    const k = new Date();
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    return all.filter((task) => task.kDate < k.toLocaleDateString("en-CA"));
  };


  const dueToday = () => {
   const k = new Date();
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    return all.filter((task) => task.kDate == k.toLocaleDateString("en-CA"));
  };
  

  const dueLater = () => {
    const k = new Date();
    // Write the date check condition here and return the array
   // of todo items that are due later accordingly.
   return all.filter((task) => task.kDate > k.toLocaleDateString("en-CA"));
  };


  const toDisplayableList = (list) => {
    return list
     .map(
        (todo) => ${todo.completed ? '[x]' : '[ ]'} ${todo.title} ${todo.kDate === today ? '' : todo.kDate}`,
      )
      .join('\n');
  };
  
  
    // Format the To-Do list here, and return the output string
    // as per the format given above.

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};


// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
module.exports = todoList;
