let actionId = 0;
const jobIsDoneByClick = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: actionId++,
          text: action.text,
          done: false,
        },
      ];

    case 'CHANGE_TASK_DONE':
      return state.map(
        obj => (obj.id === action.id ? { ...obj, done: !obj.done } : obj),
      );

    case 'DELETE_TASK':
      for (let i = 0; i <= state.length; i++) {
        if (state[i].id === action.id) {
          return [...state.slice(0, i), ...state.slice(i + 1)];
        }
      }
      break;

    default:
      return state;
  }
};

export { jobIsDoneByClick };
