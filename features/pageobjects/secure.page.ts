import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get header () { return $('h1=Project Overview') }
}

export default new SecurePage();
