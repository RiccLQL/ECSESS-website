let background!: string;
let main!: string;
let text!: string;
let input!: string;
let accent!: string;

function updateColors(el: HTMLElement): void {
    background = getComputedStyle(el).getPropertyValue("--backgroundColor");
    main = getComputedStyle(el).getPropertyValue("--mainColor");
    text = getComputedStyle(el).getPropertyValue("--textColor");
    input = getComputedStyle(el).getPropertyValue("--inputtColor");
    accent = getComputedStyle(el).getPropertyValue("--accentColor");
    console.log(background);
}

function setTheme(theme: string, el: HTMLElement) {
    el.setAttribute("data-theme", theme);
    updateColors(el);
    localStorage.setItem('theme', theme);
}

function get() {
    return {
        background,
        main,
        text,
        input,
        accent,
    }
}

export default {
    setTheme,
    get,
}