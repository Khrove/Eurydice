import {LibraryPage} from "../../pages/assess/library.page";

export class LibraryOperation {
    private libraryPage: LibraryPage;

    constructor() {
        this.libraryPage = new LibraryPage();
    }

    validateItemStandards(standards: string[][]) {
        for(let i = 0; i < standards.length; i++) {
            for (let j = 0; j < standards[i].length; j++) {
                this.libraryPage
                    .getQuestion(i)
                    .getStandard()
                    .validateText(standards[i][j]);
            }
        }
    }
}