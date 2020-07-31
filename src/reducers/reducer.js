const initState = {
    tasks: [
        {title: "Task1", body: "Body1"},
        {title: "Task2", body: "Body2"},
        {title: "Task3", body: "Body3"},
        {title: "Task4", body: "Body4"},
        {title: "Task5", body: "Body5"},
        {title: "Task6", body: "Body6"},
        {title: "Task7", body: "Body7"},
    ]
}
  
const reducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DELETE_TASK') {
        let newtasks = state.tasks.filter(task => {
            return task.title !== action.title
        });
        return {
            ...state,
            tasks: newtasks
        }
    }
    else if (action.type === 'ADD_TASK') {
        return {
            
        }
    }
    return state;
}

export default reducer