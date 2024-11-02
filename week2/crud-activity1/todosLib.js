let taskArray = [];
let nextId = 1;

function getAll() {
    return todosArray;
}


function addOne(task, completed, dueDate){
    // Check if any parameter is empty or undefined
    if (!task || !completed || !dueDate) {
        return false;
    }

    const newTask = {
        id: nextId++,  // Assigns a unique id and increments it
        task,
        completed,
        dueDate
    };

    taskArray.push(newTask); // Adds the new task to the array
    return newTask; // Returns the added task object
}

function findById(id){
    const numericId = Number(id); // Converts the ID to a number
    const task = taskArray.find(item => item.id === numericId); // Finds the task with the matching ID
    return task || false; // Returns the task or false if not found
}

function updateOneById(id, updatedData) {
    const task = findById(id);
    if (task) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) task.task = updatedData.task;
        if (updatedData.completed) task.completed = updatedData.completed;
        if (updatedData.dueDate) task.dueDate = updatedData.dueDate;
        return task; // Returns the updated task object
    }
    return false; // Returns false if the task with the provided ID is not found
}

function deleteOneById(id) {
    const task = findById(id);
    if (task) {
        const initialLength = taskArray.length;
        taskArray = taskArray.filter(task => task.id !== Number(id)); // Filters out the task with the matching ID
        return taskArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the task was not found
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

if (require.main === module) {
    console.log("getAll called:", getAll());

      // Add tasks
      let result = addOne("Buy groceries", false,  "2024-08-30");
      console.log(result);
      result = addOne("Go to shower", false,  "2025-01-01");
      console.log(result);
  
      console.log("getAll called:", getAll());
  
      console.log("findById called:", findById(1));
  
      console.log("updateOneById called:", updateOneById(1, { completed: true }));
      console.log("findById called after item updated:", findById(1));
  
      console.log("deleteOneById called:", deleteOneById(1));
      console.log("findById called after item deleted:", findById(1));
      
}

module.exports = ToDos;
