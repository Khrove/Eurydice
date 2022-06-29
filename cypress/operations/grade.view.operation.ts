import { GradeView } from "../pages/explore/grade.view";

export class GradeViewOperation {
    private gradeView: GradeView;

    constructor() {
        this.gradeView = new GradeView();
    }

    public openModule(title: string | number) {
        if (typeof title === 'number') {
            this.gradeView.moduleCard.eq(title).click();
        } else {
            this.gradeView.moduleCard.contains(title).click();
        }
    }
}