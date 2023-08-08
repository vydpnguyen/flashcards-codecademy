import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            // Example payload: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            const { id, name, topicId, cardIds } = action.payload;
            // Store these values in the state as a new topic object
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: []
            }
        }
    }
})

// Export selector for topics object
export const selectQuizzes = state => state.quizzes.quizzes;

// Export action creators
export const { addQuiz } = quizzesSlice.actions;

// Export reducers
export default quizzesSlice.reducer;