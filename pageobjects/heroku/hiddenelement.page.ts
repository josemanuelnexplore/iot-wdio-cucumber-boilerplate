import Page from './page';

class HiddenElementPage extends Page {

    get startBtn() { return $('button=Start') }
    get hiddenElement() { return $('h4=Hello World!') }

    async displayHiddenElement() {
        await (await this.startBtn).click();
    }

    open() {
        return super.open('dynamic_loading/1');
    }
}
export default new HiddenElementPage();