export const addTaskDispatcher = inpValue => ({
  type: 'ADD_TASK',
  text: inpValue,
});

export const taskDoneDispatcher = objId => ({
  type: 'CHANGE_TASK_DONE',
  id: objId,
});

export const deleteTaskDispatcher = objId => ({
  type: 'DELETE_TASK',
  id: objId,
});
