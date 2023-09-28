fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t
        .typeText("#developer-name", "My first test")
        .click("#macos")
        .click("#submit-button");
})