/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { questionsData } from './questionsData ';

const CustomerQuestions = ({ selectedCourse }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [gradeVisible, setGradeVisible] = useState(false);
  const [marks, setMarks] = useState(0);

  // Fetch questions based on selected course
  useEffect(() => {
    if (selectedCourse) {
      fetchQuestionsForCourse(selectedCourse);
    } else {
      // If no course is selected, select a random one
      const courses = Object.keys(questionsData);
      const randomCourse = courses[Math.floor(Math.random() * courses.length)];
      fetchQuestionsForCourse(randomCourse);
    }
  }, [selectedCourse]);

  const fetchQuestionsForCourse = (course) => {
    // Fetch questions based on the selected course
    const courseQuestions = questionsData[course] || [];
    setQuestions(courseQuestions);
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    let totalMarks = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        totalMarks += 1;
      }
    });

    setMarks(totalMarks);
    setGradeVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ceeff5]">
      <div className="bg-[#f4fcfe] shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Customer Questions from {selectedCourse || 'Web Course'}
        </h1>

        {questions.length > 0 ? (
          <div className="grid text-gray-700 grid-cols-2 gap-4">
            {questions.map((question, index) => (
              <div key={index} className="p-4 bg-white rounded shadow-md">
                <div className="font-semibold mb-2">
                  Q{index + 1}: {question.text}
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="Yes"
                      onChange={() => handleAnswerChange(index, 'Yes')}
                      checked={answers[index] === 'Yes'}
                    />{' '}
                    Yes
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="No"
                      onChange={() => handleAnswerChange(index, 'No')}
                      checked={answers[index] === 'No'}
                    />{' '}
                    No
                  </label>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-red text-center mt-4">
            No questions available for this course.
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue hover:bg-[#005a59] w-28 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>

        {gradeVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative text-gray-700 bg-white p-6 rounded shadow-lg max-w-lg w-full">
              <button
                className="absolute top-2 right-2 text-gray-600"
                onClick={() => setGradeVisible(false)}
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-4">Grade Card</h2>
              <p className="text-lg">
                You scored {marks} out of {questions.length}.
              </p>
              <p className="text-lg">
                Correct Answers: {marks}, Wrong Answers: {questions.length - marks}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerQuestions;
