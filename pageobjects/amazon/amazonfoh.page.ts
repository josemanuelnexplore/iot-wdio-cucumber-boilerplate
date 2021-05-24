class AmazonFOH {
    open() {
        return browser.url('https://www.amazon.com/');
    }
    get searchBtn() { return $('//*[@id="nav-search-submit-button"]') }
    get searchBox() { return $('//*[@id="twotabsearchtextbox"]') }

    async submitSearch(product) {
        const searchBox = await this.searchBox;
        await searchBox.setValue(product)
        const searchBtn = await this.searchBtn;
        await searchBtn.click();
    }
}
export default new AmazonFOH();