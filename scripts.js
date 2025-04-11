// Here is task one:

// Todo List App

// Goal: Simple to-do app with in-memory task storage.
// Each task should have an: id, title, completed

// Features:

// Add task
// Mark task as done/undone
// Filter task according to:  completed | pending tasks
// Delete task

// const Task = {
//     id: 0,
//     title: "",
//     completed: false,
//     new: function (_title, _id) {
//         return {
//             id: _id,
//             title: _title,
//             completed: this.completed,
//         };
//     },
// };

// const TaskList = [];

// function addTask(_title) {
//     const _currentTaskLength = TaskList.length;
//     // Create a new task
//     //have an id based on itys index
//     const _task = Task.new(_title, _currentTaskLength);
//     //push it into the list
//     TaskList.push(_task);
//     //havethe completed is false
//     return _currentTaskLength;
// }

// function completeTask(_id) {
//     ///ensure id exists
//     if (_id > TaskList.length) {
//         alert("Task does not exist");
//         return;
//     }
//     if (TaskList[_id].completed == true) {
//         alert("Task already completed");
//         return;
//     }
//     if (TaskList[_id].title == "") {
//         alert("Task does not exist");
//         return;
//     }
//     //use id to mark the task as completed
//     TaskList[_id].completed = true;
//     //return id
// }

const Task = {
    id: 0,
    title: "",
    completed: false,
    new: function (_title, _id) {
        return {
            id: _id,
            title: _title,
            completed: this.completed,
        };
    },
};

const li = document.createElement("li");
const TaskList = [];

function addTask() {
    const _title = document.getElementById("todo-input").value;
    if (_title == "") {
        alert("Please enter a task");
        return;
    }

    const _currentTaskLength = TaskList.length;
    // Create a new task
    //have an id based on itys index
    const _task = Task.new(_title, _currentTaskLength);
    //push it into the list
    TaskList.push(_task);
    //havethe completed is false
    document.getElementById("todo-input").value = "";
    updateScreen();
    return _currentTaskLength;
}

function updateScreen() {
    const TaskLists = document.getElementById("todo-list");
    TaskLists.innerHTML = "";
    for (let i = 0; i < TaskList.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = TaskList[i].title;
        TaskLists.appendChild(li);
    }
    return true;
}

function completeTask(_id) {
    ///ensure id exists
    if (_id > TaskList.length) {
        alert("Task does not exist");
        return;
    }
    if (TaskList[_id].completed == true) {
        alert("Task already completed");
        return;
    }
    if (TaskList[_id].title == "") {
        alert("Task does not exist");
        return;
    }
    //use id to mark the task as completed
    TaskList[_id].completed = true;
    //return id
}
