import { GradeView } from "../../pages/explore/grade.view";

export class GradeViewOperation {
    private gradeView: GradeView;

    constructor() {
        this.gradeView = new GradeView();
    }

    public openModule(title: string | number) {
        this.gradeView.moduleCard.click(title);
    }

    public changeLevel(level: string) {
        this.gradeView.subheaderComp.levelBtn.click();
        this.gradeView.subheaderComp.level.click(level);
    }
}