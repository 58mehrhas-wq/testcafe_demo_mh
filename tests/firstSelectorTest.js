import { Selector } from "testcafe";

const developerName = Selector("#developer-name")
const osOption = Selector("#macos")
const submitBtn = Selector("#submit-button")

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t
        .typeText(developerName, "My first test")
        .click(osOption)
        .click(submitBtn);
})