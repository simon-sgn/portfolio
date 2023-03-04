import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Portfolio");
    }

    async getHtml() {
        return `
            Here is my portfolio
        `;
    }
}