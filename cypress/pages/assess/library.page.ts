import {QuestionComp} from "../../components/assess/question.comp";

export class LibraryPage {
    get question() { return new QuestionComp('button[class*="AssessmentItem"]'); }
    getQuestion(question: string | number) {
        return new QuestionComp(this.question.findEl(question));
    }
}