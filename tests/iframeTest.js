import { Selector } from "testcafe";

const iframeName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("iFrame Fixture")
    .page("https://the-internet.herokuapp.com/iframe");

test("iFrame test", async t => {
    await t
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey("ctrl+a delete")
        .typeText(textArea, "Ich sehr froh hier zu sein!")
        .expect(textArea.innerText).contains("froh")
        .switchToMainWindow();
})