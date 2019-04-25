<!--input the number of Reviews Per Page-->
function Input() {
    this.html = document.createElement("div");
    this.html.setAttribute("class", "input");
    this.html.innerHTML = `
        <br><span>Your choice is 7 or 14 or 21 or 70</span><br>
        <h2>show
        <input type="text"
        id='rpp'
        maxlength="2"
        size="1"
        onkeyup="setTimeout(getReviews, 1000)"
        />
        reviews
        </h2>
    `;
}

Input.create = function () {
    let input, script;
    script = document.currentScript;
    input = new Input();
    script.parentNode.replaceChild(input.html, script);
};
