export class QuestionModel {
    question: string;
    optionArray: [
        {
            text: string,
            correct: boolean,
            checked?: boolean
        },
        {
            text: string,
            correct: boolean,
            checked?: boolean
        },
        {
            text: string,
            correct: boolean,
            checked?: boolean
        },
        {
            text: string,
            correct: boolean,
            checked?: boolean
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