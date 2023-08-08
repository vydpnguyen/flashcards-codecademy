import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            // Example payload: {id: '123456', name: 'name of topic', icon: 'icon url'}
            const { id, name, icon } = action.payload;
            // Store these values in the state as a new topic object
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            // Example payload: {quizId: '123', topicId: '456'}
            const { topicId, id } = action.payload;
            // Adding a quiz's 'id' to the 'quizId' array of the topic the new quiz is associated with
            state.topics[topicId].quizIds.push(id);
        }
    }
})

// Export selector for topics object
export const selectTopics = state => state.topics.topics;

// Export action creators
export const { addTopic, addQuizId } = topicsSlice.actions;

// Export reducers
export default topicsSlice.reducer;