fixture.meta("version", "1")("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

test.meta("env", "Prod")
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
    await t
        .typeText("#developer-name", "My first test")
        .click("#macos")
        .click("#submit-button");
});

test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
    await t
        .typeText("#developer-name", "My first test")
        .click("#macos")
        .click("#submit-button");
});