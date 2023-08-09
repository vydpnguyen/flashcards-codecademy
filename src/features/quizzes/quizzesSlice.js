import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            // Example payload: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            const { id, name, topicId, cardIds } = action.payload;

            // Store these values in the state as a new quiz object
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }
})

// Write an action creator that returns a thunk that dispatches these two actions one after the other.
// This new thunk action creator is the one that you will dispatch when a user creates a new quiz.
export const addQuizThunk = (newQuiz) => {
    const { topicId, id } = newQuiz;
    return (dispatch) => {
        // Dispatch the addQuiz action to create the new quiz
        dispatch(addQuiz(newQuiz));

        // Dispatch the associateQuizWithTopic action to associate the quiz with the topic
        dispatch(addQuizId({ topicId: topicId, id: id }));
    }
}

// Export selector for topics object
export const selectQuizzes = state => state.quizzes.quizzes;

// Export action creators
export const { addQuiz } = quizzesSlice.actions;

// Export reducers
export default quizzesSlice.reducer;