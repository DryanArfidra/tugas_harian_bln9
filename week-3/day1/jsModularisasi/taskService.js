export const tasks = [];
export let nextId = 1;

export function addTask(judul) {
  const task = {
    id: nextId++,
    judul: judul
  };
  tasks.push(task);
  return task;
}

export function getAllTask() {
  return tasks;
}

export function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}
