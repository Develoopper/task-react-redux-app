export const deleteTask = (title) => {
    return {
        type: 'DELETE_TASK',
        title
    }
}