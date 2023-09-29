import { Selector } from "testcafe";

const developerName = Selector("#developer-name")
const osOption = Selector("#macos")
const submitBtn = Selector("#submit-button")

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    const developernameElement = 
    await developerName.with({visibilityCheck:true})();
    await t
        .expect(developernameElement.value).eql('', 'input is empty')
        .typeText(developerName, "My first test")
        .expect(developerName.value).eql('My first test', 'input contains "first"')
        .click(osOption)
        .click(submitBtn);
})