class ProductDetail {
    get addToCartBtn() { return $('//*[@id="add-to-cart-button"]') }
    get cartBtn() { return $('//*[@id="hlb-view-cart-announce"]') }

    async addToCart() {
        const addToCartBtn = await this.addToCartBtn;
        await addToCartBtn.click();
    }

    async goToCart() {
        const cartBtn = await this.cartBtn;




        
        await cartBtn.click();
    }
}
export default new ProductDetail();