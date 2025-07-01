import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Add task
  const handleAddTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(), // unique id
      text: task
    };

    setTaskList([...taskList, newTask]);
    setTask(''); // clear input
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    const updatedList = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedList);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>📝 To-Do List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask} style={{ marginLeft: '10px' }}>
        ➕ Add
      </button>

      <ul style={{ marginTop: '20px' }}>
        {taskList.map((t) => (
          <li key={t.id} style={{ marginBottom: '10px' }}>
            {t.text}
            <button
              onClick={() => handleDeleteTask(t.id)}
              style={{
                marginLeft: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '4px 8px'
              }}
            >
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;