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
        }
    }
})

// Export selector for topics object
export const selectTopics = state => state.topics.topics;

// Export action creators
export const { addTopic } = topicsSlice.actions;

// Export reducers
export default topicsSlice.reducer;