"use client";

// state
import { useState } from "react";

// compnents
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// utils
import { toast } from "@/lib/utils/toast";

const dataQuestions = [
  {
    id: "question-1",
    question:
      "What is the most common type of Diabetes a woman might develop during pregnancy?",
    answers: [
      { text: "type 1", value: "a" },
      { text: "type 2", value: "b" },
      { text: "gestational", value: "c" },
      { text: "neonatal", value: "d" },
    ],
  },
  {
    id: "question-2",
    question: "How many bones are in the human body?",
    answers: [
      { text: "180", value: "a" },
      { text: "206", value: "b" },
      { text: "220", value: "c" },
      { text: "240", value: "d" },
    ],
  },
  {
    id: "question-3",
    question: "What is the powerhouse of the cell called?",
    answers: [
      { text: "mitochondria", value: "a" },
      { text: "ribosome", value: "b" },
      { text: "nucleus", value: "c" },
      { text: "endoplasmic reticulum", value: "d" },
    ],
  },
];

export const QuizScreen = () => {
  // state
  const [questions, setQuestions] = useState(dataQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  return (
    <div className="not-prose rounded-md border bg-gray-100 p-2 dark:bg-gray-900">
      {/* screen */}
      <div className="rounded-md bg-background">
        {/* header */}
        <div className="border-b p-4">
          <p className="font-medium text-primary">Practice Quiz</p>
          <p className="text-sm text-muted-foreground">Question 3 of 50</p>
          <div className="flex items-center gap-2">
            <Progress value={32} />
            <p className="whitespace-nowrap text-xs">3 mins 12 secs</p>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-col gap-4 p-4">
          <div className="mb-4 flex items-center justify-between">
            <Button
              size="sm"
              variant="outline"
              onClick={() => toast("Question has been flagged!")}
            >
              flag
            </Button>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast("Hint has been revealed!")}
              >
                hint
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast("50/50 has been used!")}
              >
                50/50
              </Button>
            </div>
          </div>
          <div>
            <p className="text-primary">Question:</p>
            <p className="mb-4 text-sm">
              {questions[currentQuestionIndex].question}
            </p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {questions[currentQuestionIndex].answers.map((ans) => {
                return (
                  <Button
                    key={ans.value}
                    variant="outline"
                    onClick={() => {
                      if (currentQuestionIndex < questions.length - 1) {
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                      }

                      toast("Your answer has been submitted!");
                    }}
                  >
                    {ans.text}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                disabled={currentQuestionIndex === 0}
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                  }
                }}
              >
                prev
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={currentQuestionIndex === questions.length - 1}
                onClick={() => {
                  if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                  }
                }}
              >
                next
              </Button>
            </div>
            <Button size="sm" onClick={() => toast("Submitting your answers!")}>
              submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
