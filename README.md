# 🧠 Quiz Generator 9000 🚀

Welcome to **Quiz Generator 9000**, the only quiz maker you’ll ever need (until AI takes over the world, of course). This project auto-generates a **tree-based, interactive quiz** in plain ol’ HTML and JavaScript, meaning **no backend**, no databases, and no cookies tracking your poor test scores. 🎯

## 🤔 What Does It Do?

- Reads questions from a JSON file 📜
- Magically generates a **choose-your-own-adventure-style** quiz 🏆
- Creates **hundreds of pages** so you can get lost in a maze of your own mistakes 🔥
- Displays your final score like an unbiased judge of your intelligence 😎

## 📐 How Many Pages Does It Create?

Oh, you want **math** in a quiz project? Fine. Here's the magic formula:

$$
P = 1 + \sum_{k=1}^{Q} O^k
$$

Where:  
- \( P \) = Total number of pages  
- \( Q \) = Number of questions  
- \( O \) = Number of options per question  

Example Calculation:  

For **4 questions** with **4 options each**:  

$$
P = 1 + 4^1 + 4^2 + 4^3 + 4^4
$$

$$
P = 1 + 4 + 16 + 64 + 256 = 341
$$

Wait, **341 pages** for 4 questions? Yep! This quiz isn’t playing around. 😆

## 🚀 How To Use It?

1. Clone this masterpiece:
   ```bash
   git clone https://github.com/ragnar-vallhala/quiz_generator.git
   cd quiz_generator
   ```
2. Generate your quiz:  
   * Add question file path in `main.js` at:
    ```js
    await generate("yourfile.json");
    ```
    * A sample file is provided with the code as:
    ```json
    {
    "author": "Ashutosh Vishwakarma",
    "github": "https://github.com/ragnar-vallhala",
    "repo": "https://github.com/ragnar-vallhala/quiz_generator",
    "questions": [
        {
        "question": "What is 7 x 8?",
        "options": [
            { "value": 56, "correct": true },
            { "value": 48, "correct": false },
            { "value": 64, "correct": false },
            { "value": 49, "correct": false }
        ]
        },
        {
        "question": "Who wrote 'Hamlet'?",
        "options": [
            { "value": "William Shakespeare", "correct": true },
            { "value": "Charles Dickens", "correct": false },
            { "value": "Leo Tolstoy", "correct": false },
            { "value": "Mark Twain", "correct": false }
        ]
        },
        {
        "question": "What is the chemical symbol for Gold?",
        "options": [
            { "value": "Au", "correct": true },
            { "value": "Ag", "correct": false },
            { "value": "Pb", "correct": false },
            { "value": "Fe", "correct": false }
        ]
        }
    ]
    }
    ```
    * Run the project by following commands
    ```bash
    npm install
    npm run start
    ```

3. Open `pages/index.html` and quiz away! 🏅

## 🛠 Features

✅ **Tree-structured quizzes** - Every answer leads to a different question!  
✅ **Automatic HTML generation** - No manual coding required!  
✅ **Score tracking** - Get judged mercilessly at the end!  
✅ **No database, no servers** - Just static files that work anywhere!

## 🏗 Future Plans

- 🎨 Make it **look pretty** (because right now it’s as basic as a 90s website)
- 🏆 Add **leaderboards** to compete with your overachiever friends
- 🔥 Implement **mind-blowing animations** (because why not)

## 🎭 License

This project is **open-source**, meaning you can fork it, improve it, break it, and take all the credit. Just don’t blame us if your quiz is too hard and your friends stop talking to you. 🤷‍♂️

