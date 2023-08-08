# About

This is my project for Codecademy's **Redux Flashcards** in the **Full Stack Engineer** path. **Note:** The initial commit includes default files provided by Codecademy (www.codecademy.com). The updated starter code with React Router v6 up to October 2022 was created by [joacopaz](https://github.com/joacopaz/Flashcards_Boilerplate). I have built upon this starting point to develop the project further.

# Project Description

In this project, you will practice using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users will also be able to interact with their quizzes by flipping flashcards over.

# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

# Questions

Is this appropriately scoped? Does it have too many features? Too few?
