const express = require('express'); //expressを利用することを定義
const app = express(); // expressをappと定義

const mysql = require('mysql'); //今回はMySQLを利用する
const connection = mysql.createConnection({　// 以下、各自のMySQLへの接続情報を書く
  host: 'localhost',
  user: 'root',
  password: '******',
  database: 'db_development'
});

app.get('/', function (req, res) {　// app.get...(expressの構文)、req=request。 res=response
  res.set({ 'Access-Control-Allow-Origin': '*' }); // この記載により、※1：CORSを許可する
  connection.query('select * from scrapings', function (error, results) { // scrapingsテーブルから全てのカラムを取得する
    if (error) throw error; // エラー処理
    res.send(results[0]); // results[0]により、一番目のデータを返答する
  });
});

app.listen(5000, function () { // port 5000をlistenする
  console.log('Example app listening on port 5000!'); // console.logによりファイル実行時にコンソールに文字表示させる
});
