const addbtn = document.getElementById('addTaskButton');




class Task {
    constructor(name) {
        this.name = name;
    }
}

// Define Task Manager Class
class TaskManager {
    constructor(){
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        this.render();
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(t => t.name !== taskName);
        this.render();
    }

    render() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => this.deleteTask(task.name));

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
}

const taskManager = new TaskManager();

addbtn.addEventListener('click', () => {
    const taskName = document.getElementById('taskName').value;
    if (taskName) {
        const task = new Task(taskName);
        taskManager.addTask(task);
        document.getElementById('taskName').value = '';
    } else {
        alert('Please enter a task name');
    }
});