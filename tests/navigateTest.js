fixture("Navigate Example")
    .page("https://devexpress.github.io/testcafe/example/")

test("navigate test", async t => {
    await t
        .navigateTo("http://mehrdads.com");
})