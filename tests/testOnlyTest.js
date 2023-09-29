fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

test
    .only
    .page("https://devexpress.github.io/testcafe/example/")
("First Test", async t => {
    await t
        .setTestSpeed(0.1)
        .typeText("#developer-name", "My first test")
        .click("#macos")
        .click("#submit-button");
})

test
    .page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t => {
    await t
        .setTestSpeed(0.01)
        .typeText("#developer-name", "My second test")
        .click("#windows")
        .click("#submit-button");
})