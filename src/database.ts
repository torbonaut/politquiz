export interface Question {
  id: number;
  slug: string;
  question: string;
  options: {
    letter: string;
    text: string;
  }[];
  correctAnswer: string;
  backgroundInfo: string;
}

export const questions: Question[] = [
  {
    id: 1,
    slug: "law-follows-politics",
    question: 'Who said "Law has to follow politics"?',
    options: [
      { letter: "A", text: "Sebastian Kurz" },
      { letter: "B", text: "Herbert Kickl" },
      { letter: "C", text: "Leonore Gewessler" },
      { letter: "D", text: "Doris Bures" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Herbert Kickl, former Austrian Interior Minister, made this controversial statement in 2018, sparking debate about the relationship between politics and the rule of law. The statement was widely criticized as undermining the principle of separation of powers."
  },
  {
    id: 2,
    slug: "austrian-chancellor-2019",
    question: "Who became Austrian Chancellor in 2019?",
    options: [
      { letter: "A", text: "Alexander Van der Bellen" },
      { letter: "B", text: "Sebastian Kurz" },
      { letter: "C", text: "Brigitte Bierlein" },
      { letter: "D", text: "Werner Kogler" }
    ],
    correctAnswer: "C",
    backgroundInfo: "Brigitte Bierlein became Austria's first female Chancellor in June 2019, leading a caretaker government after the Ibiza affair. She served until January 2020 and was previously the President of the Constitutional Court."
  },
  {
    id: 3,
    slug: "green-party-minister",
    question: "Which Austrian Green Party politician became Climate Minister in 2020?",
    options: [
      { letter: "A", text: "Werner Kogler" },
      { letter: "B", text: "Leonore Gewessler" },
      { letter: "C", text: "Alma Zadić" },
      { letter: "D", text: "Sigi Maurer" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Leonore Gewessler became Austria's Minister for Climate Action, Environment, Energy, Mobility, Innovation and Technology in January 2020 as part of the ÖVP-Green coalition government."
  },
  {
    id: 4,
    slug: "parliament-president",
    question: "Who has been President of the Austrian National Council since 2017?",
    options: [
      { letter: "A", text: "Doris Bures" },
      { letter: "B", text: "Wolfgang Sobotka" },
      { letter: "C", text: "Norbert Hofer" },
      { letter: "D", text: "Barbara Prammer" }
    ],
    correctAnswer: "B",
    backgroundInfo: "Wolfgang Sobotka (ÖVP) has served as President of the Austrian National Council since January 2017. He previously served as Interior Minister from 2016 to 2017."
  },
  {
    id: 5,
    slug: "ibiza-affair-year",
    question: "In which year did the Ibiza affair scandal break?",
    options: [
      { letter: "A", text: "2017" },
      { letter: "B", text: "2018" },
      { letter: "C", text: "2019" },
      { letter: "D", text: "2020" }
    ],
    correctAnswer: "C",
    backgroundInfo: "The Ibiza affair was a political scandal that erupted in May 2019, involving hidden camera footage from 2017 of then-Vice Chancellor Heinz-Christian Strache. The scandal led to the collapse of the Austrian government."
  }
];

export function getQuestionById(id: number): Question | undefined {
  return questions.find(q => q.id === id);
}

export function getQuestionBySlug(slug: string): Question | undefined {
  return questions.find(q => q.slug === slug);
}

export function getRandomQuestion(excludeIds: number[] = []): Question {
  const available = questions.filter(q => !excludeIds.includes(q.id));
  if (available.length === 0) return questions[Math.floor(Math.random() * questions.length)];
  return available[Math.floor(Math.random() * available.length)];
}
