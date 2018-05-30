const request = require('request');
const API = "http://api.aoikujira.com/kawase/get.php?code=USD&format=json";

var result;
request(API, (err, response, body) => {
    if (err || response.statusCode !== 200) {
        console.log("ERROR", err);
        return;
    }

    // JSON을 JS 객체로 변환
    var r = JSON.parse(body);
    var krw = r["KRW"];

    // 환율을 파일에 저장 (파일명에는 일자표기)
    var t = new Date();
    var fname = "USD_KRW_" +
        t.getFullYear() + "-" + (t.getMonth() + 1) +
        "-" + t.getDay() + ".txt";
    var text = "1usd=" + krw + "krw";
    result = text;
    console.log(text);
    module.exports = text;
});

