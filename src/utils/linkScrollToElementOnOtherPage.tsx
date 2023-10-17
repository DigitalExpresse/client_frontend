export const linkScrollToElementOnOtherPage = (elementId: string) => {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 10);
}
