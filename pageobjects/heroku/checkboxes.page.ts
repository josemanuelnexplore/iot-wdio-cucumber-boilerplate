import Page from './page';

class CheckBoxesPage extends Page {

    get checkBox() { return $$('<input>') }

    open() {
        return super.open('checkboxes');
    }
}
export default new CheckBoxesPage();