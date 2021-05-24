class ProductList {

    get firstElement() { return $('[data-image-index="1"]'); }
    async selectFirstProduct() {
        const firstProduct = await this.firstElement;
        await firstProduct.click();
    }

}
export default new ProductList();