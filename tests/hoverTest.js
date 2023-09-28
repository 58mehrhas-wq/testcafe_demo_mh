fixture('Hover Fixture')
    .page('https://devexpress.github.io/testcafe/example/');

test('Hover test', async t =>{
    await t
        .setTestSpeed(0.01)
        .hover('input#populate');
});