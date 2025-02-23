"use client";

import { useEffect, useState } from "react";
import data from "./data";
import QuestionCard, { Question } from "./QuestionCard";

const filnaldata = data.map((x, index) => ({ ...x, index }));

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuestions(filnaldata.slice(0, 10));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setQuestions(
      filnaldata
        .filter((x) =>
          x.question
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
        .slice(0, 10)
    );
  };

  return (
    <div className="container mx-auto">
      <div className="sticky top-0 shadow-md z-10 p-4">
        <div className="w-full mx-auto">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 text-black focus:ring-blue-500 placeholder-black"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-2">
        {questions.map((data, index) => (
          <QuestionCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
