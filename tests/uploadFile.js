import { Selector } from "testcafe";

const fileUpload = Selector('input#file-upload');
const uploadFileBtn = Selector('input#file-submit.button');

fixture('File upload Fixture')
    .page('https://the-internet.herokuapp.com/upload');