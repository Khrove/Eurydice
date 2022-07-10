import {ClickablePri} from "../../primary/clickable.pri";
import {SubheaderComp} from "../../components/global/subheader.comp";

export class GradeView {
    get moduleCard() { return new ClickablePri('div[class*="ModuleCardstyled__TextDescription"] span'); }
    get subheaderComp() { return new SubheaderComp('[aria-label="Curriculum"]'); }
}