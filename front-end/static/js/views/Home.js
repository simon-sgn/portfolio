import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            Welcome to my personal website.
            Lets explore me! <br>
            <a href="/portfolio" data-link>View my portfolio now!</a>
        `;
    }
}