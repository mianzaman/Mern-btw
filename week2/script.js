const taskInput = document.getElementById('new-task');
        const taskList = document.getElementById('task-list');
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        taskInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask(taskInput.value);
                taskInput.value = '';
            }
        });

        function addTask(taskText) {
            const task = {
                text: taskText,
                completed: false
            };
            tasks.push(task);
            saveTasks();
            displayTasks(tasks);
        }

        function displayTasks(tasksToDisplay) {
            taskList.innerHTML = '';
            tasksToDisplay.forEach((task, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
                    <span class="text">${task.text}</span>
                    <button onclick="deleteTask(${index})">...</button>
                `;
                taskList.appendChild(li);
            });
        }

        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks(tasks);
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks(tasks);
        }

        function filterTasks(filter) {
            document.querySelectorAll('.filter button').forEach(button => {
                button.classList.remove('active');
            });
            event.target.classList.add('active');

            let tasksToDisplay;
            if (filter === 'all') {
                tasksToDisplay = tasks;
            } else if (filter === 'pending') {
                tasksToDisplay = tasks.filter(task => !task.completed);
            } else {
                tasksToDisplay = tasks.filter(task => task.completed);
            }
            displayTasks(tasksToDisplay);
        }

        function clearTasks() {
            tasks = [];
            saveTasks();
            displayTasks(tasks);
        }

        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Initialize display
        displayTasks(tasks);