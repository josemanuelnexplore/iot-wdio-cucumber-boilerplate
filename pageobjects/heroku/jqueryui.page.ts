import Page from './page';

class JqueryUI extends Page {

    get enabledLink() { return $('=Enabled') }
    get backToJqueryUILink() { return $('=Back to JQuery UI') }

    async backToJqueryPage() {
        const enabledLink = await this.enabledLink;
        await enabledLink.click();
        const backToJqueryUILink = await this.backToJqueryUILink;
        await backToJqueryUILink.click();
    }

    open() {
        return super.open('jqueryui/menu#');
    }
}
export default new JqueryUI();
