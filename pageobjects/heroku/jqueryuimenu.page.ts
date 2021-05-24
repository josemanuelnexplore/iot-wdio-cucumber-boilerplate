import Page from './page';

class JqueryUIMenu extends Page {
    get menuLink() { return $('=Menu') }

    open() {
        return super.open('jqueryui');
    }
}
export default new JqueryUIMenu();
