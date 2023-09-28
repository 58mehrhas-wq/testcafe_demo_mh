import { Selector } from "testcafe";

const fileUpload = Selector('input#file-upload');
const uploadFileBtn = Selector('input#file-submit.button');

fixture('File upload Fixture')
    .page('https://the-internet.herokuapp.com/upload');

test('File Upload test', async t => {
    await t
        .setTestSpeed(0.01)
        .setFilesToUpload(fileUpload, '../../Upload/My_dream_place.png')
        .clearUpload(fileUpload)
        .setFilesToUpload(fileUpload, '../../Upload/My_dream_place.png')
        .setTestSpeed(0.01)
        .click(uploadFileBtn);
})