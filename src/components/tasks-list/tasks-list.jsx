import React from 'react';
import Task from '../task/task';

const TasksList = () => {
    const tasks = [
        { id: 1, title: 'React', completed: true},
        { id: 2, title: 'Props', completed: true},
        { id: 3, title: 'State', completed: false},
        { id: 4, title: 'Lifecycle', completed: false},
    ];
    return (
        <div className="tasks-list">
            {tasks.map((task, index) => (
                <Task title={task.title} completed={task.completed} key={task.id} />
            ))}
        </div>
    )
}

export default TasksList;