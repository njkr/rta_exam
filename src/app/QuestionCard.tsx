import React from "react";

export interface Question {
  question_number: number;
  question: string;
  options: string[];
  correct_answer: string;
  user_answer: string;
  is_correct: boolean;
}

interface QuestionCardProps {
  data: Question; // Use the Question type for the prop
}

const QuestionCard: React.FC<QuestionCardProps> = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-full mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-xl font-bold text-gray-800">{data.question}</h2>

        <ul className="mt-4 space-y-2 text-gray-600">
          {data.options.map((option, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-lg">
              {option}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <p
            className={`text-sm font-bold ${
              data.is_correct ? "text-green-500" : "text-red-500"
            }`}
          >
            Correct Answer!
          </p>
          <p className="mt-2 text-gray-600">{data.correct_answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
