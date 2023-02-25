import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

// List of questions and answers
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Giraffe', 'Blue Whale', 'Rhinoceros'],
    answer: 'Blue Whale',
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Dollar', 'Euro', 'Pound'],
    answer: 'Yen',
  },
  {
    question: 'Who is the author of the Harry Potter series?',
    options: [
      'J.K. Rowling',
      'Stephen King',
      'Dan Brown',
      'George R.R. Martin',
    ],
    answer: 'J.K. Rowling',
  },
];

// Function to shuffle the questions
const shuffleQuestions = questions => {
  let currentIndex = questions?.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = questions[currentIndex];
    questions[currentIndex] = questions[randomIndex];
    questions[randomIndex] = temporaryValue;
  }

  return questions;
};

const StartQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState(shuffleQuestions(questions));

  // Function to handle answer selection
  const handleAnswer = answer => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View>
      {showScore ? (
        <View>
          <Text>
            Your Score: {score} out of {questions?.length}
          </Text>
        </View>
      ) : (
        <View>
          <Text>Question {currentQuestion + 1}</Text>
          <Text>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map(option => (
            <Button
              key={option}
              title={option}
              onPress={() => handleAnswer(option)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default StartQuiz;
