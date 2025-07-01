import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add task
  const handleAddTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: task
    };

    setTaskList([...taskList, newTask]);
    setTask('');
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    const updatedList = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedList);
  };

  // Start editing
  const handleEditTask = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  // Save edited task
  const handleSaveEdit = () => {
    const updatedList = taskList.map(task =>
      task.id === editId ? { ...task, text: editText } : task
    );
    setTaskList(updatedList);
    setEditId(null);
    setEditText('');
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
            {editId === t.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={handleSaveEdit}
                  style={{ marginLeft: '10px', backgroundColor: 'green', color: 'white' }}
                >
                  💾 Save
                </button>
              </>
            ) : (
              <>
                {t.text}
                <button
                  onClick={() => handleEditTask(t)}
                  style={{ marginLeft: '10px', backgroundColor: 'orange', color: 'white' }}
                >
                  ✏️ Edit
                </button>
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
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;