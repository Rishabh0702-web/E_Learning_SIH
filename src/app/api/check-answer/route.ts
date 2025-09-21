import { NextRequest, NextResponse } from 'next/server';import { NextRequest, NextResponse } from 'next/server';import { NextRequest, NextResponse } from 'next/server';import { NextRequest, NextResponse } from 'next/server';import { NextRequest, NextResponse } from 'next/server';



export async function POST(request: NextRequest) {

  try {

    const body = await request.json();// Mock correct answers for each question

    const { questionId, selectedAnswer, uid } = body;

const mockCorrectAnswers: { [key: string]: number } = {

    // Mock correct answers

    const correctAnswers: any = {  'math-1': 0,// Mock correct answers for our sample questions

      'math-1': 0,

      'math-2': 1,  'math-2': 1,

      'science-1': 2,

      'science-2': 0,  'science-1': 2,const mockCorrectAnswers: { [key: string]: number } = {

      'history-1': 1,

      'history-2': 2,  'science-2': 0,

      'geography-1': 0,

      'geography-2': 1,  'history-1': 1,  'math-1': 0,// Mock correct answers for our sample questions// Mock correct answers for our sample questions

      'english-1': 2,

      'english-2': 0,  'history-2': 2,

      'physics-1': 1,

      'physics-2': 2,  'geography-1': 0,  'math-2': 1,

      'cs-1': 0,

      'cs-2': 1  'geography-2': 1,

    };

  'english-1': 2,  'science-1': 2,const mockCorrectAnswers: { [key: string]: number } = {const mockCorrectAnswers: { [key: string]: number } = {

    const correctAnswer = correctAnswers[questionId] || 0;

    const isCorrect = selectedAnswer === correctAnswer;  'english-2': 0,

    const points = isCorrect ? 10 : 0;

  'physics-1': 1,  'science-2': 0,

    const responseData = {

      correct: isCorrect,  'physics-2': 2,

      points: points,

      totalPoints: 100 + points,  'cs-1': 0,  'history-1': 1,  'math-1': 0,  'math-1': 0,

      correctAnswer: correctAnswer,

      explanation: isCorrect ? "Correct! Well done!" : "That's not quite right, but keep trying!",  'cs-2': 1

      newLevel: 2,

      newBadges: isCorrect ? ["Great Job!"] : []};  'history-2': 2,

    };



    return NextResponse.json({

      success: true,// Mock explanations for each question  'geography-1': 0,  'math-2': 1,  'math-2': 1,

      data: responseData

    });const mockExplanations: { [key: string]: string } = {



  } catch (error) {  'math-1': "The correct answer is 12. When you multiply 3 × 4, you get 12.",  'geography-2': 1,

    return NextResponse.json(

      { success: false, message: 'Error checking answer' },  'math-2': "The correct answer is 8. The area of a rectangle is length × width = 4 × 2 = 8.",

      { status: 500 }

    );  'science-1': "The correct answer is Mars. Mars is known as the Red Planet due to iron oxide on its surface.",  'english-1': 0,  'science-1': 2,  'science-1': 2,

  }

}  'science-2': "The correct answer is Oxygen. Oxygen (O2) is essential for human respiration.",

  'history-1': "The correct answer is 1492. Christopher Columbus reached the Americas in 1492.",  'english-2': 2,

  'history-2': "The correct answer is Egypt. The Great Pyramid of Giza is located in Egypt.",

  'geography-1': "The correct answer is Asia. Asia is the largest continent by both area and population.",  'physics-1': 1,  'science-2': 0,  'science-2': 0,

  'geography-2': "The correct answer is Amazon River. The Amazon is the longest river in the world.",

  'english-1': "The correct answer is Shakespeare. William Shakespeare wrote Romeo and Juliet.",  'physics-2': 0,

  'english-2': "The correct answer is Noun. 'Cat' is a noun as it names a person, place, or thing.",

  'physics-1': "The correct answer is 9.8 m/s². This is the standard acceleration due to gravity on Earth.",  'cs-1': 2,  'history-1': 1,  'history-1': 1,

  'physics-2': "The correct answer is Newton. The unit of force in the SI system is the Newton.",

  'cs-1': "The correct answer is HyperText Markup Language. HTML stands for HyperText Markup Language.",  'cs-2': 1

  'cs-2': "The correct answer is Python. Python is known for its simple and readable syntax."

};};  'history-2': 2,  'history-2': 2,



export async function POST(request: NextRequest) {

  try {

    const body = await request.json();// Mock user progress data stored in memory (in production, this would be a database)  'geography-1': 0,  'geography-1': 0,

    const { questionId, selectedAnswer, uid } = body;

let mockUserProgress: { [uid: string]: any } = {};

    if (!questionId || selectedAnswer === null || selectedAnswer === undefined) {

      return NextResponse.json(  'geography-2': 1,  'geography-2': 1,

        { success: false, message: 'Missing required fields' },

        { status: 400 }export async function POST(request: NextRequest) {

      );

    }  try {  'english-1': 0,  'english-1': 0,



    const correctAnswer = mockCorrectAnswers[questionId];    const body = await request.json();

    const isCorrect = selectedAnswer === correctAnswer;

    const points = isCorrect ? 10 : 0;    const { questionId, selectedAnswer, uid } = body;  'english-2': 2,  'english-2': 2,

    const explanation = mockExplanations[questionId] || "No explanation available.";



    // Mock response data

    const responseData = {    if (!questionId || selectedAnswer === undefined || !uid) {  'physics-1': 1,  'physics-1': 1,

      correct: isCorrect,

      points: points,      return NextResponse.json({

      totalPoints: 100 + points, // Mock total points

      correctAnswer: correctAnswer,        success: false,  'physics-2': 0,  'physics-2': 0,

      explanation: explanation,

      newLevel: isCorrect ? 2 : 1, // Mock level progression        message: 'Missing required fields: questionId, selectedAnswer, uid'

      newBadges: isCorrect ? ["First Correct Answer"] : []

    };      }, { status: 400 });  'cs-1': 2,  'cs-1': 2,



    return NextResponse.json({    }

      success: true,

      data: responseData  'cs-2': 1  'cs-2': 1

    });

    // Get the correct answer for this question

  } catch (error) {

    console.error('Error checking answer:', error);    const correctAnswer = mockCorrectAnswers[questionId];};};

    return NextResponse.json(

      { success: false, message: 'Internal server error' },    if (correctAnswer === undefined) {

      { status: 500 }

    );      return NextResponse.json({

  }

}        success: false,

        message: 'Question not found'// Mock user progress data stored in memory (in production, this would be a database)// Mock user progress data stored in memory (in production, this would be a database)

      }, { status: 404 });

    }let mockUserProgress: { [uid: string]: any } = {};let mockUserProgress: { [uid: string]: any } = {};



    // Check if the answer is correct

    const isCorrect = selectedAnswer === correctAnswer;

    export async function POST(request: NextRequest) {export async function POST(request: NextRequest) {

    // Calculate points based on correctness

    const pointsEarned = isCorrect ? 10 : 0;  try {  try {



    // Initialize user progress if it doesn't exist    const body = await request.json();    const body = await request.json();

    if (!mockUserProgress[uid]) {

      mockUserProgress[uid] = {    const { questionId, selectedAnswer, uid } = body;    const { questionId, selectedAnswer, uid } = body;

        points: 0,

        level: 1,

        badges: [],

        totalQuestionsAnswered: 0,    if (!questionId || selectedAnswer === undefined || !uid) {      'math-1': 0,

        correctAnswers: 0,

        subjects: {}      return NextResponse.json({

      };

    }        success: false,      'math-2': 1,    const { questionId, selectedAnswer, uid } = body;



    // Update user progress        message: 'Missing required fields: questionId, selectedAnswer, uid'

    const userProgress = mockUserProgress[uid];

    userProgress.points += pointsEarned;      }, { status: 400 });      'math-3': 0,

    userProgress.totalQuestionsAnswered += 1;

    if (isCorrect) {    }

      userProgress.correctAnswers += 1;

    }      'science-1': 0,let mockUserProgress: { [uid: string]: any } = {};



    // Calculate new level (every 100 points = new level)    // Get the correct answer for this question

    const newLevel = Math.floor(userProgress.points / 100) + 1;

    const leveledUp = newLevel > userProgress.level;    const correctAnswer = mockCorrectAnswers[questionId];      'science-2': 1,

    userProgress.level = newLevel;

    if (correctAnswer === undefined) {

    // Add badges for milestones

    const newBadges: string[] = [];      return NextResponse.json({      'science-3': 2,    // Mock correct answers for demonstration

    if (userProgress.totalQuestionsAnswered === 1 && !userProgress.badges.includes('First Answer')) {

      userProgress.badges.push('First Answer');        success: false,

      newBadges.push('First Answer');

    }        message: 'Question not found'      'history-1': 1,

    if (userProgress.correctAnswers === 5 && !userProgress.badges.includes('5 Correct')) {

      userProgress.badges.push('5 Correct');      }, { status: 404 });

      newBadges.push('5 Correct');

    }    }      'history-2': 1,    const mockCorrectAnswers: { [key: string]: number } = {// Mock user progress data stored in memory (in production, this would be a database)import { doc, getDoc, updateDoc, setDoc, increment, arrayUnion } from 'firebase/firestore';

    if (userProgress.correctAnswers === 10 && !userProgress.badges.includes('10 Correct')) {

      userProgress.badges.push('10 Correct');

      newBadges.push('10 Correct');

    }    // Check if the answer is correct      'geo-1': 2,

    if (leveledUp && !userProgress.badges.includes('Level Up')) {

      userProgress.badges.push('Level Up');    const isCorrect = selectedAnswer === correctAnswer;

      newBadges.push('Level Up');

    }          'geo-2': 1,      'math-1': 0,



    // Generate explanation    // Calculate points based on correctness

    const explanations: { [key: string]: string } = {

      'math-1': 'Great job! This is a basic addition problem.',    const pointsEarned = isCorrect ? 10 : 0;      'english-1': 1,

      'math-2': 'Correct! This demonstrates understanding of multiplication.',

      'science-1': 'Excellent! You know your basic science facts.',

      'science-2': 'Well done! Chemistry knowledge is important.',

      'history-1': 'Perfect! You know your historical dates.',    // Initialize user progress if it doesn't exist      'english-2': 1,      'math-2': 1,// Mock questions data (matching the questions API)

      'history-2': 'Great! Understanding historical events is key.',

      'geography-1': 'Excellent geographical knowledge!',    if (!mockUserProgress[uid]) {

      'geography-2': 'Well done! You know your world capitals.',

      'english-1': 'Perfect grammar understanding!',      mockUserProgress[uid] = {      'physics-1': 3,

      'english-2': 'Great vocabulary knowledge!',

      'physics-1': 'Excellent physics understanding!',        points: 0,

      'physics-2': 'Well done with the physics concepts!',

      'cs-1': 'Great programming knowledge!',        level: 1,      'physics-2': 1,      'math-3': 0,

      'cs-2': 'Excellent computer science understanding!'

    };        badges: [],



    const explanation = explanations[questionId] || (isCorrect ? 'Correct answer!' : 'Not quite right, but keep trying!');        totalQuestionsAnswered: 0,      'cs-1': 1,



    // Return the result        correctAnswers: 0,

    return NextResponse.json({

      success: true,        subjects: {}      'cs-2': 2      'science-1': 0,const mockQuestions = [let mockUserProgress: { [uid: string]: any } = {};import { AnswerCheckResponse, User, Question } from '@/types/quiz';

      data: {

        correct: isCorrect,      };

        points: pointsEarned,

        totalPoints: userProgress.points,    }    };

        correctAnswer: correctAnswer,

        explanation: explanation,

        newLevel: leveledUp ? newLevel : undefined,

        newBadges: newBadges.length > 0 ? newBadges : undefined,    // Update user progress      'science-2': 1,

        userProgress: userProgress

      }    const userProgress = mockUserProgress[uid];

    });

    userProgress.points += pointsEarned;    const correctAnswer = mockCorrectAnswers[questionId] ?? 0;

  } catch (error) {

    console.error('Error checking answer:', error);    userProgress.totalQuestionsAnswered += 1;

    return NextResponse.json({

      success: false,    if (isCorrect) {    const isCorrect = selectedAnswer === correctAnswer;      'science-3': 2,  {

      message: 'Internal server error'

    }, { status: 500 });      userProgress.correctAnswers += 1;

  }

}    }    const points = isCorrect ? 15 : 0;



    // Calculate new level (every 100 points = new level)      'history-1': 1,

    const newLevel = Math.floor(userProgress.points / 100) + 1;

    const leveledUp = newLevel > userProgress.level;    console.log(`[MOCK API] Checking answer for ${questionId}: ${isCorrect ? 'CORRECT' : 'INCORRECT'}`);

    userProgress.level = newLevel;

      'history-2': 1,    id: 'math-1',

    // Add badges for milestones

    const newBadges: string[] = [];    return NextResponse.json({

    if (userProgress.totalQuestionsAnswered === 1 && !userProgress.badges.includes('First Answer')) {

      userProgress.badges.push('First Answer');      success: true,      'geo-1': 2,

      newBadges.push('First Answer');

    }      data: {

    if (userProgress.correctAnswers === 5 && !userProgress.badges.includes('5 Correct')) {

      userProgress.badges.push('5 Correct');        correct: isCorrect,      'geo-2': 1,    subject: 'mathematics',

      newBadges.push('5 Correct');

    }        points: points,

    if (userProgress.correctAnswers === 10 && !userProgress.badges.includes('10 Correct')) {

      userProgress.badges.push('10 Correct');        totalPoints: 100 + points,      'english-1': 1,

      newBadges.push('10 Correct');

    }        correctAnswer: correctAnswer,

    if (leveledUp && !userProgress.badges.includes('Level Up')) {

      userProgress.badges.push('Level Up');        explanation: isCorrect ? 'Correct! Well done!' : `Incorrect. The correct answer was option ${correctAnswer + 1}.`      'english-2': 1,    question: 'What is the value of π (pi) rounded to 2 decimal places?',// Mock questions data (matching the questions API)// Retry utility function

      newBadges.push('Level Up');

    }      }



    // Generate explanation    });      'physics-1': 3,

    const explanations: { [key: string]: string } = {

      'math-1': 'Great job! This is a basic addition problem.',

      'math-2': 'Correct! This demonstrates understanding of multiplication.',

      'science-1': 'Excellent! You know your basic science facts.',  } catch (error: any) {      'physics-2': 1,    options: ['3.14', '3.15', '3.16', '3.13'],

      'science-2': 'Well done! Chemistry knowledge is important.',

      'history-1': 'Perfect! You know your historical dates.',    console.error('[MOCK API] Error:', error);

      'history-2': 'Great! Understanding historical events is key.',

      'geography-1': 'Excellent geographical knowledge!',    return NextResponse.json({      'cs-1': 1,

      'geography-2': 'Well done! You know your world capitals.',

      'english-1': 'Perfect grammar understanding!',      success: false,

      'english-2': 'Great vocabulary knowledge!',

      'physics-1': 'Excellent physics understanding!',      message: 'Error checking answer'      'cs-2': 2    correctAnswer: 0,const mockQuestions = [async function retryFirestoreOperation<T>(

      'physics-2': 'Well done with the physics concepts!',

      'cs-1': 'Great programming knowledge!',    }, { status: 500 });

      'cs-2': 'Excellent computer science understanding!'

    };  }    };



    const explanation = explanations[questionId] || (isCorrect ? 'Correct answer!' : 'Not quite right, but keep trying!');}

    points: 10,

    // Return the result

    return NextResponse.json({    const correctAnswer = mockCorrectAnswers[questionId] ?? 0;

      success: true,

      data: {    const isCorrect = selectedAnswer === correctAnswer;    difficulty: 'easy'  {  operation: () => Promise<T>,

        correct: isCorrect,

        points: pointsEarned,    const points = isCorrect ? 15 : 0;

        totalPoints: userProgress.points,

        correctAnswer: correctAnswer,  },

        explanation: explanation,

        newLevel: leveledUp ? newLevel : undefined,    console.log(`[MOCK API] Question: ${questionId}, Answer: ${selectedAnswer}, Correct: ${correctAnswer}, Result: ${isCorrect}`);

        newBadges: newBadges.length > 0 ? newBadges : undefined,

        userProgress: userProgress  {    id: 'math-1',  maxRetries: number = 3,

      }

    });    return NextResponse.json({



  } catch (error) {      success: true,    id: 'math-2',

    console.error('Error checking answer:', error);

    return NextResponse.json({      data: {

      success: false,

      message: 'Internal server error'        correct: isCorrect,    subject: 'mathematics',    subject: 'mathematics',  delay: number = 1000

    }, { status: 500 });

  }        points: points,

}
        totalPoints: 100 + points,    question: 'What is 15% of 200?',

        correctAnswer: correctAnswer,

        explanation: isCorrect ? 'Correct! Well done!' : `Incorrect. The correct answer was option ${correctAnswer + 1}.`    options: ['25', '30', '35', '40'],    question: 'What is the value of π (pi) rounded to 2 decimal places?',): Promise<T> {

      }

    });    correctAnswer: 1,



  } catch (error: any) {    points: 15,    options: ['3.14', '3.15', '3.16', '3.13'],  for (let attempt = 1; attempt <= maxRetries; attempt++) {

    console.error('[MOCK API] Error:', error);

    return NextResponse.json({    difficulty: 'medium'

      success: false,

      message: 'Error checking answer'  },    correctAnswer: 0,    try {

    }, { status: 500 });

  }  {

}
    id: 'science-1',    points: 10,      return await operation();

    subject: 'science',

    question: 'What is the chemical symbol for water?',    difficulty: 'easy'    } catch (error: any) {

    options: ['H2O', 'HO2', 'H2O2', 'OH2'],

    correctAnswer: 0,  },      if (attempt === maxRetries || !handleFirestoreError(error)) {

    points: 10,

    difficulty: 'easy'  {        throw error;

  },

  {    id: 'math-2',      }

    id: 'history-1',

    subject: 'history',    subject: 'mathematics',      console.log(`Firestore operation failed (attempt ${attempt}), retrying in ${delay}ms...`);

    question: 'Who was the first President of the United States?',

    options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],    question: 'What is 15% of 200?',      await new Promise(resolve => setTimeout(resolve, delay));

    correctAnswer: 1,

    points: 10,    options: ['25', '30', '35', '40'],      delay *= 2; // Exponential backoff

    difficulty: 'easy'

  }    correctAnswer: 1,    }

];

    points: 15,  }

// Function to get user progress or create new user

function getUserProgress(uid: string) {    difficulty: 'medium'  throw new Error('Max retries exceeded');

  if (!mockUserProgress[uid]) {

    mockUserProgress[uid] = {  },}

      points: 0,

      level: 1,  {

      badges: [],

      totalQuestionsAnswered: 0,    id: 'math-3',// Level calculation function

      correctAnswers: 0,

      subjects: {}    subject: 'mathematics',function calculateLevel(points: number): number {

    };

  }    question: 'Solve: 2x + 5 = 15. What is x?',  // Level progression: Level 1 = 0-99 points, Level 2 = 100-299, Level 3 = 300-599, etc.

  return mockUserProgress[uid];

}    options: ['5', '10', '15', '20'],  if (points < 100) return 1;



// Function to calculate level based on points    correctAnswer: 0,  return Math.floor((points - 100) / 200) + 2;

function calculateLevel(points: number) {

  return Math.floor(points / 100) + 1;    points: 20,}

}

    difficulty: 'medium'

export async function POST(request: NextRequest) {

  try {  },// Badge checking function

    const body = await request.json();

    const { questionId, selectedAnswer, uid } = body;  {function checkForNewBadges(user: User, newPoints: number): string[] {



    console.log(`[MOCK API] Checking answer for question: ${questionId}, selected: ${selectedAnswer}, user: ${uid}`);    id: 'science-1',  const newBadges: string[] = [];



    // Find the question    subject: 'science',  const totalPoints = user.points + newPoints;

    const question = mockQuestions.find(q => q.id === questionId);

    if (!question) {    question: 'What is the chemical symbol for water?',  

      return NextResponse.json({

        success: false,    options: ['H2O', 'HO2', 'H2O2', 'OH2'],  // Point-based badges

        message: 'Question not found'

      }, { status: 404 });    correctAnswer: 0,  const pointBadges = [

    }

    points: 10,    { id: 'first_points', name: 'Getting Started', threshold: 10 },

    // Check if answer is correct

    const isCorrect = selectedAnswer === question.correctAnswer;    difficulty: 'easy'    { id: 'hundred_club', name: 'Century Club', threshold: 100 },

    const pointsAwarded = isCorrect ? question.points : 0;

  },    { id: 'five_hundred', name: 'High Achiever', threshold: 500 },

    // Get or create user progress

    const userProgress = getUserProgress(uid);  {    { id: 'thousand', name: 'Quiz Master', threshold: 1000 }

    

    // Update user progress    id: 'science-2',  ];

    userProgress.totalQuestionsAnswered += 1;

    if (isCorrect) {    subject: 'science',

      userProgress.correctAnswers += 1;

      userProgress.points += pointsAwarded;    question: 'Which planet is known as the Red Planet?',  pointBadges.forEach(badge => {

    }

    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],    if (totalPoints >= badge.threshold && !user.badges.includes(badge.id)) {

    // Update subject-specific progress

    if (!userProgress.subjects[question.subject]) {    correctAnswer: 1,      newBadges.push(badge.id);

      userProgress.subjects[question.subject] = {

        points: 0,    points: 15,    }

        questionsAnswered: 0,

        correctAnswers: 0    difficulty: 'easy'  });

      };

    }  },

    

    const subjectProgress = userProgress.subjects[question.subject];  {  // Question count badges

    subjectProgress.questionsAnswered += 1;

    if (isCorrect) {    id: 'science-3',  const totalQuestions = (user.totalQuestionsAnswered || 0) + 1;

      subjectProgress.correctAnswers += 1;

      subjectProgress.points += pointsAwarded;    subject: 'science',  const questionBadges = [

    }

    question: 'What gas do plants absorb from the atmosphere during photosynthesis?',    { id: 'first_question', name: 'First Step', threshold: 1 },

    // Calculate new level

    const oldLevel = userProgress.level;    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],    { id: 'ten_questions', name: 'Learning Enthusiast', threshold: 10 },

    userProgress.level = calculateLevel(userProgress.points);

    const leveledUp = userProgress.level > oldLevel;    correctAnswer: 2,    { id: 'fifty_questions', name: 'Knowledge Seeker', threshold: 50 },



    // Generate explanation    points: 15,    { id: 'hundred_questions', name: 'Quiz Champion', threshold: 100 }

    const explanation = isCorrect 

      ? `Correct! ${question.options[question.correctAnswer]} is the right answer.`    difficulty: 'medium'  ];

      : `Incorrect. The correct answer is ${question.options[question.correctAnswer]}.`;

  },

    console.log(`[MOCK API] Answer checked: ${isCorrect ? 'Correct' : 'Incorrect'}, Points awarded: ${pointsAwarded}`);

  {  questionBadges.forEach(badge => {

    // Simulate slight delay

    await new Promise(resolve => setTimeout(resolve, 50));    id: 'history-1',    if (totalQuestions >= badge.threshold && !user.badges.includes(badge.id)) {



    return NextResponse.json({    subject: 'history',      newBadges.push(badge.id);

      success: true,

      data: {    question: 'Who was the first President of the United States?',    }

        correct: isCorrect,

        points: pointsAwarded,    options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],  });

        totalPoints: userProgress.points,

        correctAnswer: question.correctAnswer,    correctAnswer: 1,

        explanation,

        newLevel: leveledUp ? userProgress.level : undefined,    points: 10,  return newBadges;

        newBadges: []

      }    difficulty: 'easy'}

    });

  },

  } catch (error: any) {

    console.error('[MOCK API] Error checking answer:', error);  {export async function POST(request: NextRequest) {

    

    return NextResponse.json({    id: 'history-2',  try {

      success: false,

      message: `Error checking answer: ${error.message}`    subject: 'history',    const body = await request.json();

    }, { status: 500 });

  }    question: 'In which year did World War II end?',    const { questionId, selectedAnswer, uid } = body;

}
    options: ['1944', '1945', '1946', '1947'],

    correctAnswer: 1,    // Validate required fields

    points: 15,    if (!questionId || selectedAnswer === undefined || !uid) {

    difficulty: 'medium'      const response: AnswerCheckResponse = {

  },        success: false,

  {        message: 'Missing required fields: questionId, selectedAnswer, uid',

    id: 'geo-1',        error: 'Validation error'

    subject: 'geography',      };

    question: 'What is the capital of Australia?',      return NextResponse.json(response, { status: 400 });

    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],    }

    correctAnswer: 2,

    points: 15,    // Performance tracking

    difficulty: 'medium'    const startTime = Date.now();

  },

  {    // Fetch question and user data in parallel for better performance with retry logic

    id: 'geo-2',    const [questionSnap, userSnap] = await retryFirestoreOperation(async () => {

    subject: 'geography',      return await Promise.all([

    question: 'Which is the longest river in the world?',        getDoc(doc(db, 'questions', questionId)),

    options: ['Amazon River', 'Nile River', 'Mississippi River', 'Yangtze River'],        getDoc(doc(db, 'users', uid))

    correctAnswer: 1,      ]);

    points: 20,    });

    difficulty: 'medium'

  },    const fetchTime = Date.now() - startTime;

  {

    id: 'english-1',    if (!questionSnap.exists()) {

    subject: 'english',      const response: AnswerCheckResponse = {

    question: 'What is the plural form of "child"?',        success: false,

    options: ['childs', 'children', 'childes', 'child'],        message: 'Question not found',

    correctAnswer: 1,        error: 'Invalid question ID'

    points: 10,      };

    difficulty: 'easy'      return NextResponse.json(response, { status: 404 });

  },    }

  {

    id: 'english-2',    const questionData = questionSnap.data() as Question;

    subject: 'english',    const isCorrect = selectedAnswer === questionData.correctAnswer;

    question: 'Who wrote the play "Romeo and Juliet"?',    const pointsEarned = isCorrect ? questionData.points : 0;

    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],

    correctAnswer: 1,    let userData: User;

    points: 15,    let isNewUser = false;

    difficulty: 'medium'

  },    if (!userSnap.exists()) {

  {      // Create new user

    id: 'physics-1',      isNewUser = true;

    subject: 'physics',      userData = {

    question: 'What is the speed of light in vacuum?',        uid,

    options: ['300,000 km/s', '299,792,458 m/s', '186,000 miles/s', 'All of the above'],        points: 0,

    correctAnswer: 3,        badges: [],

    points: 20,        level: 1,

    difficulty: 'hard'        totalQuestionsAnswered: 0,

  },        correctAnswers: 0,

  {        subjects: {},

    id: 'physics-2',        lastActive: new Date(),

    subject: 'physics',        createdAt: new Date()

    question: 'What is the unit of electric current?',      };

    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],    } else {

    correctAnswer: 1,      userData = userSnap.data() as User;

    points: 15,    }

    difficulty: 'medium'

  },    // Pre-calculate all updates to minimize database writes

  {    const newBadges = checkForNewBadges(userData, pointsEarned);

    id: 'cs-1',    const previousLevel = userData.level;

    subject: 'computer science',    const newTotalPoints = userData.points + pointsEarned;

    question: 'What does HTML stand for?',    const newLevel = calculateLevel(newTotalPoints);

    options: ['High Tech Modern Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'HyperText Modern Language'],

    correctAnswer: 1,    // Prepare subject-specific stats

    points: 10,    const subjectKey = questionData.subject.toLowerCase();

    difficulty: 'easy'    const subjectStats = userData.subjects?.[subjectKey] || {

  },      points: 0,

  {      questionsAnswered: 0,

    id: 'cs-2',      correctAnswers: 0

    subject: 'computer science',    };

    question: 'Which programming language is known as the "language of the web"?',

    options: ['Python', 'Java', 'JavaScript', 'C++'],    // Optimized single database write operation

    correctAnswer: 2,    const userRef = doc(db, 'users', uid);

    points: 15,    const updateData = {

    difficulty: 'medium'      points: increment(pointsEarned),

  }      totalQuestionsAnswered: increment(1),

];      correctAnswers: increment(isCorrect ? 1 : 0),

      level: newLevel,

// Function to get user progress or create new user      lastActive: new Date(),

function getUserProgress(uid: string) {      badges: arrayUnion(...newBadges)

  if (!mockUserProgress[uid]) {    };

    mockUserProgress[uid] = {

      points: 0,    // Update subject stats separately to avoid nested object conflicts

      level: 1,    const subjectUpdateData = {

      badges: [],      [`subjects.${subjectKey}.points`]: subjectStats.points + pointsEarned,

      totalQuestionsAnswered: 0,      [`subjects.${subjectKey}.questionsAnswered`]: subjectStats.questionsAnswered + 1,

      correctAnswers: 0,      [`subjects.${subjectKey}.correctAnswers`]: subjectStats.correctAnswers + (isCorrect ? 1 : 0)

      subjects: {}    };

    };

  }    const updateTime = Date.now();

  return mockUserProgress[uid];    

}    // Single atomic update operation with retry logic

    await retryFirestoreOperation(async () => {

// Function to calculate level based on points      if (isNewUser) {

function calculateLevel(points: number) {        return await setDoc(userRef, {

  return Math.floor(points / 100) + 1;          ...userData,

}          points: pointsEarned,

          totalQuestionsAnswered: 1,

// Function to award badges          correctAnswers: isCorrect ? 1 : 0,

function checkForNewBadges(userProgress: any, question: any, isCorrect: boolean) {          level: newLevel,

  const newBadges: string[] = [];          lastActive: new Date(),

            badges: newBadges,

  // First correct answer badge          ...subjectUpdateData

  if (isCorrect && userProgress.correctAnswers === 1 && !userProgress.badges.includes('first_correct')) {        });

    newBadges.push('first_correct');      } else {

    userProgress.badges.push('first_correct');        return await updateDoc(userRef, {

  }          ...updateData,

            ...subjectUpdateData

  // Subject specialist badges (5 correct in a subject)        });

  const subjectProgress = userProgress.subjects[question.subject];      }

  if (subjectProgress && subjectProgress.correctAnswers >= 5) {    });

    const badgeName = `${question.subject}_specialist`;

    if (!userProgress.badges.includes(badgeName)) {    const dbWriteTime = Date.now() - updateTime;

      newBadges.push(badgeName);

      userProgress.badges.push(badgeName);    // Prepare response

    }    const responseData = {

  }      correct: isCorrect,

        points: pointsEarned,

  // Point milestone badges      totalPoints: newTotalPoints,

  if (userProgress.points >= 100 && !userProgress.badges.includes('points_100')) {      correctAnswer: questionData.correctAnswer,

    newBadges.push('points_100');      explanation: `The correct answer is: ${questionData.options[questionData.correctAnswer]}`

    userProgress.badges.push('points_100');    };

  }

  if (userProgress.points >= 500 && !userProgress.badges.includes('points_500')) {    // Add level up notification if applicable

    newBadges.push('points_500');    if (newLevel > previousLevel) {

    userProgress.badges.push('points_500');      (responseData as any).newLevel = newLevel;

  }    }

  

  return newBadges;    // Add new badges if any

}    if (newBadges.length > 0) {

      (responseData as any).newBadges = newBadges;

export async function POST(request: NextRequest) {    }

  try {

    const body = await request.json();    const response: AnswerCheckResponse = {

    const { questionId, selectedAnswer, uid } = body;      success: true,

      message: isCorrect 

    console.log(`[MOCK API] Checking answer for question: ${questionId}, selected: ${selectedAnswer}, user: ${uid}`);        ? `Correct! You earned ${pointsEarned} points.` 

        : `Incorrect. The correct answer was: ${questionData.options[questionData.correctAnswer]}`,

    // Find the question      data: responseData

    const question = mockQuestions.find(q => q.id === questionId);    };

    if (!question) {

      return NextResponse.json({    // Add performance metrics and caching headers

        success: false,    const totalTime = Date.now() - startTime;

        message: 'Question not found'    const responseWithHeaders = NextResponse.json(response, { status: 200 });

      }, { status: 404 });    responseWithHeaders.headers.set('X-Response-Time', `${totalTime}ms`);

    }    responseWithHeaders.headers.set('X-DB-Fetch-Time', `${fetchTime}ms`);

    responseWithHeaders.headers.set('X-DB-Write-Time', `${dbWriteTime}ms`);

    // Check if answer is correct    

    const isCorrect = selectedAnswer === question.correctAnswer;    return responseWithHeaders;

    const pointsAwarded = isCorrect ? question.points : 0;

  } catch (error) {

    // Get or create user progress    console.error('Error checking answer:', error);

    const userProgress = getUserProgress(uid);    

        const response: AnswerCheckResponse = {

    // Update user progress      success: false,

    userProgress.totalQuestionsAnswered += 1;      message: 'Internal server error while checking answer',

    if (isCorrect) {      error: error instanceof Error ? error.message : 'Unknown error'

      userProgress.correctAnswers += 1;    };

      userProgress.points += pointsAwarded;

    }    return NextResponse.json(response, { status: 500 });

  }

    // Update subject-specific progress}

    if (!userProgress.subjects[question.subject]) {

      userProgress.subjects[question.subject] = {// GET method to retrieve answer without checking (for review purposes)

        points: 0,export async function GET(request: NextRequest) {

        questionsAnswered: 0,  try {

        correctAnswers: 0    const { searchParams } = new URL(request.url);

      };    const questionId = searchParams.get('questionId');

    }

        if (!questionId) {

    const subjectProgress = userProgress.subjects[question.subject];      const response: AnswerCheckResponse = {

    subjectProgress.questionsAnswered += 1;        success: false,

    if (isCorrect) {        message: 'Question ID is required',

      subjectProgress.correctAnswers += 1;        error: 'Missing questionId parameter'

      subjectProgress.points += pointsAwarded;      };

    }      return NextResponse.json(response, { status: 400 });

    }

    // Calculate new level

    const oldLevel = userProgress.level;    const questionRef = doc(db, 'questions', questionId);

    userProgress.level = calculateLevel(userProgress.points);    const questionSnap = await getDoc(questionRef);

    const leveledUp = userProgress.level > oldLevel;

    if (!questionSnap.exists()) {

    // Check for new badges      const response: AnswerCheckResponse = {

    const newBadges = checkForNewBadges(userProgress, question, isCorrect);        success: false,

        message: 'Question not found',

    // Generate explanation        error: 'Invalid question ID'

    const explanation = isCorrect       };

      ? `Correct! ${question.options[question.correctAnswer]} is the right answer.`      return NextResponse.json(response, { status: 404 });

      : `Incorrect. The correct answer is ${question.options[question.correctAnswer]}.`;    }



    console.log(`[MOCK API] Answer checked: ${isCorrect ? 'Correct' : 'Incorrect'}, Points awarded: ${pointsAwarded}`);    const questionData = questionSnap.data() as Question;



    // Simulate slight delay    const response: AnswerCheckResponse = {

    await new Promise(resolve => setTimeout(resolve, 50));      success: true,

      message: 'Question details retrieved successfully',

    return NextResponse.json({      data: {

      success: true,        correct: false, // Not applicable for GET

      data: {        points: questionData.points,

        correct: isCorrect,        totalPoints: 0, // Not applicable for GET

        points: pointsAwarded,        correctAnswer: questionData.correctAnswer,

        totalPoints: userProgress.points,        explanation: `The correct answer is: ${questionData.options[questionData.correctAnswer]}`

        correctAnswer: question.correctAnswer,      }

        explanation,    };

        newLevel: leveledUp ? userProgress.level : undefined,

        newBadges: newBadges.length > 0 ? newBadges : undefined    return NextResponse.json(response, { status: 200 });

      }

    });  } catch (error) {

    console.error('Error retrieving question:', error);

  } catch (error: any) {    

    console.error('[MOCK API] Error checking answer:', error);    const response: AnswerCheckResponse = {

          success: false,

    return NextResponse.json({      message: 'Internal server error while retrieving question',

      success: false,      error: error instanceof Error ? error.message : 'Unknown error'

      message: `Error checking answer: ${error.message}`    };

    }, { status: 500 });

  }    return NextResponse.json(response, { status: 500 });

}  }
}