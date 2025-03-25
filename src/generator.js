import { promises as fs } from "fs";
import path from "path";
import { stringify } from "querystring";


const topHTML = `
<!DOCTYPE html>
<html>
<head>
<title>Quiz</title>
</head>
<body>
`

const bottomHTML = `
</body>
</html>
`
let count_pages = 0;

const readJSONFile = async (filePath) => {
    try {
        const data = await JSON.parse(await fs.readFile(filePath, "utf-8"));
        return data;
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

const generate_home = async (metaData) => {
    // increase page count
    count_pages++;
    if (metaData.author && metaData.github && metaData.repo) {
        const content = `
            Developed by ${metaData.author}
            <br/>
            Visit <a href="${metaData.github}">Github</a>
            <hr/>
            Visit <a href="${metaData.repo}">Project Repository</a>
            <hr/>
            <a href="quiz/index.html">Click to start the quiz</a>
            <hr/>
        `
        const page = topHTML + content + bottomHTML;
        try {
            await fs.mkdir("pages", { recursive: true });
            const filePath = path.join("pages", "index.html");
            await fs.writeFile(filePath, page, "utf-8");
            return { path: "pages" }
        }
        catch (e) {
            console.error(e.message)
        }
    }
    else {
        if (metaData.author === undefined) {
            console.error("Missing [author] filed in the file.")
        }
        if (metaData.github === undefined) {
            console.error("Missing [github] filed in the file.")
        }
        if (metaData.repo === undefined) {
            console.error("Missing [repo] filed in the file.")
        }
    }
}


const create_question_content = (question, index, maxIndex) => {
    let content = `
${topHTML}
        <h1>${question.question}</h1>
        <hr/>
        <ol>
    `
    for (let i = 0; i < question.options.length; i++) {
        content += `<li><a href="${i}/index.html">${question.options[i].value}</a></li>\n`;
    }
    content += `</ol>
    ${bottomHTML}
    <label>Progress</label>
    <progress value="${index}" max="${maxIndex}"></progress>
`
    return content;
}
const create_last_content = async (path, score, maxScore) => {
    // incrementy page count
    count_pages++;
    const content = `
    <!DOCTYPE html>
<html>
<head>
<title>Quiz</title>
</head>
<body>
<h1>Score</h1>
<label>${score}/${maxScore}</label>
    <progress value="${score}" max="${maxScore}"></progress>
    <a href="/">Start Again</a>
</body>
</html>
    `
    await fs.writeFile(path + "/index.html", content, "utf-8");
}

const generate_questions_pages = async (questions, path, score = 0, index = 0) => {
    if (index > questions.length) return;
    if (index == questions.length) {
        await create_last_content(path, score, questions.length);
        return;
    }
    // increase page count
    count_pages++;
    // get the content for the current page
    const content = create_question_content(questions[index], index, questions.length);
    await fs.writeFile(path + "/index.html", content, "utf-8");

    // create directories for options
    for (let i = 0; i < questions[index].options.length; i++) {
        const newPath = path + "/" + i.toString();
        await fs.mkdir(newPath, { recursive: true });
        if (questions[index].options[i].correct) {
            await generate_questions_pages(questions, newPath, score + 1, index + 1);
        }
        else {
            await generate_questions_pages(questions, newPath, score, index + 1)
        };


    }
    // console.log(path)
}

const generate_pages = async (data) => {
    const result = await generate_home(data);
    const quizPath = result.path + "/quiz";
    await fs.mkdir(quizPath, { recursive: true });
    await generate_questions_pages(data.questions, quizPath);
}


export const generate = async (path) => {
    try {

        await fs.rm("pages", { recursive: true });
    }
    catch (e) {
        console.log(e.message);
    }
    const data = await readJSONFile(path);
    await generate_pages(data);
    console.log(count_pages, " pages created.")
};


