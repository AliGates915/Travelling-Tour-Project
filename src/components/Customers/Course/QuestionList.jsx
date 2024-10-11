import { useState, useEffect } from 'react';
import { questionsData } from './questionsData ';

const courses = [
  'Web Development',
  'Mobile App Development',
  'Graphic Design',
  'Cloud Computing',
  'Blockchain Development',
];

const QuestionList = () => {
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState({});
  const [gradeVisible, setGradeVisible] = useState(false);
  const [marks, setMarks] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [ setResults] = useState({}); // State to track correct/incorrect answers
  const [extraNotes, setExtraNotes] = useState({}); // State to handle extra notes for "No Confirm" or "Observation"

  // Load questions for each course from questionsData
  useEffect(() => {
    const loadedQuestions = {};
    courses.forEach(course => {
      loadedQuestions[course] = questionsData[course] || []; // Assign an empty array if no questions found
    });
    setQuestions(loadedQuestions);
  }, []);

  const handleAnswerChange = (course, questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [course]: {
        ...prevAnswers[course],
        [questionIndex]: answer,
      },
    }));

    // Reset extra notes if confirm is selected
    if (answer === 'confirm') {
      setExtraNotes((prevNotes) => ({
        ...prevNotes,
        [course]: {
          ...prevNotes[course],
          [questionIndex]: '',
        },
      }));
    }
  };

  const handleExtraNotesChange = (course, questionIndex, notes) => {
    setExtraNotes((prevNotes) => ({
      ...prevNotes,
      [course]: {
        ...prevNotes[course],
        [questionIndex]: notes,
      },
    }));
  };

  const handleSubmit = () => {
    let totalMarks = 0;
    let questionsCount = 0;
    const resultTracker = {}; // Temporary object to store results

    // Calculate total marks and question count for all courses
    courses.forEach(course => {
      questions[course]?.forEach((question, index) => {
        if (answers[course]?.[index] === question.correctAnswer) {
          totalMarks += 1; // Increment if the answer is correct
          resultTracker[`${course}-${index}`] = 'correct'; // Track correct answer
        } else {
          resultTracker[`${course}-${index}`] = 'incorrect'; // Track incorrect answer
        }
        if (question) {
          questionsCount += 1; // Count total questions
        }
      });
    });

    setMarks(totalMarks);
    setTotalQuestions(questionsCount);
    setResults(resultTracker); // Update results state
    setGradeVisible(true); // Show grade card
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ceeff5]">
      <div className="bg-[#f4fcfe] shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          List of Questions for All Courses
        </h1>

        {courses.map((course) => (
          <div key={course} className="mb-8">
            <h2 className="text-xl text-gray-700 font-semibold mb-4">
              Questions for {course}
            </h2>
            {questions[course] && questions[course].length > 0 ? (
              <div className="grid text-gray-700 grid-cols-1 gap-4">
                {questions[course].map((question, index) => {
                  // Calculate the cumulative global index for numbering
                  let cumulativeIndex = 0;

                  // Loop through previous courses to add their question counts
                  for (let i = 0; i < courses.indexOf(course); i++) {
                    cumulativeIndex += (questions[courses[i]]?.length || 0);
                  }

                  // Global index is cumulative index + current index + 1
                  const globalIndex = cumulativeIndex + index + 1;

                  return (
                    <div key={index} className="p-4 rounded shadow-md">
                      <div className="font-semibold mb-2">
                        Q{globalIndex}: {question.text}
                      </div>
                      <div>
                        <label className="mr-4">
                          <input
                            type="radio"
                            name={`question-${course}-${index}`}
                            value="confirm"
                            onChange={() => handleAnswerChange(course, index, 'confirm')}
                            checked={answers[course]?.[index] === 'confirm'}
                          />{' '}
                          Confirm
                          
                        </label>

                        <label>
                          <input
                            type="radio"
                            name={`question-${course}-${index}`}
                            value="noConfirm"
                            onChange={() => handleAnswerChange(course, index, 'noConfirm')}
                            checked={answers[course]?.[index] === 'noConfirm'}
                          />{' '}
                          No-Confirm
                        </label>
                        <span className='ml-4'>
                        <label>
                          <input
                            type="radio"
                            name={`question-${course}-${index}`}
                            value="observation"
                            onChange={() => handleAnswerChange(course, index, 'observation')}
                            checked={answers[course]?.[index] === 'observation'}
                          />{' '}
                          Observation
                        </label>
                        </span>
                        {/* Conditionally render the small input field */}
                        {(answers[course]?.[index] === 'noConfirm' || answers[course]?.[index] === 'observation') && (
                          <input
                            type="text"
                            className="ml-8 h-10 border rounded-md px-2 py-1 w-96 text-sm"
                            placeholder="Enter about No-confirm or Observation"
                            value={extraNotes[course]?.[index] || ''}
                            onChange={(e) => handleExtraNotesChange(course, index, e.target.value)}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-red text-center mt-4">
                No questions available for this {course} course.
              </div>
            )}
          </div>
        ))}

        {gradeVisible && (
          <div className="my-2 flex text-gray-800 items-center justify-center">
            <h2 className="text-2xl font-bold">Overall Result: </h2>
            <p className="ml-4 text-lg">
              You scored {marks} out of {totalQuestions}.
            </p>
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
      </div>
    </div>
  );
};

export default QuestionList;
