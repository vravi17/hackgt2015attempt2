function getTitle (url) {
  // These code snippets use an open-source library.
  var unirest = require('unirest');
var title = unirest.post("https://neutrinoapi-html-extract.p.mashape.com/html-extract-tags")
.header("X-Mashape-Key", "FAwe0YDMHSmsh3yFveT2sNYT86YYp1FqvMEjsn0yT9XGXekjlD")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.send("content=http://www.neutrinoapi.com/")
.send("tag=title")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
}

function getHyperlinks(url) {
  var unirest = require('unirest');
  var hyperlinks = unirest.post("https://neutrinoapi-html-extract.p.mashape.com/html-extract-tags")
  .header("X-Mashape-Key", "FAwe0YDMHSmsh3yFveT2sNYT86YYp1FqvMEjsn0yT9XGXekjlD")
  .header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .send("content=http://www.neutrinoapi.com/")
  .send("tag=a")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });
}

function getMenu(url) {
  var unirest = require('unirest');
  var hyperlinks = unirest.post("https://neutrinoapi-html-extract.p.mashape.com/html-extract-tags")
  .header("X-Mashape-Key", "FAwe0YDMHSmsh3yFveT2sNYT86YYp1FqvMEjsn0yT9XGXekjlD")
  .header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .send("content=http://www.neutrinoapi.com/")
  .send("tag=menu")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

}

function speakToUser(inputString) {
  responsiveVoice.speak("hello world");
}

