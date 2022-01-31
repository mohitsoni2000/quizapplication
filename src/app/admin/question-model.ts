export class QuestionModel {
    question: string;
    optionArray: [
        {
            text: string,
            correct: boolean
        },
        {
            text: string,
            correct: boolean
        },
        {
            text: string,
            correct: boolean
        },
        {
            text: string,
            correct: boolean
        },
    ]
    constructor() {
        this.question = '';
        this.optionArray = [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false }
        ];
    }

}