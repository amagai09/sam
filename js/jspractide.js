// document.write("hellow world!");
// alert("hello world!!");/* メッセージボックスで表示*/
// console.log("hello world!!!"+"こんにちは。");
// let x=1;
// x++;
// console.log(x);

/*前置きと後起き */
// let x=7;
// let y=x++;  //ｙ代入が先
// let x2=7;
// let y2=++x2;//代入が後
// console.log(x); //8
// console.log(y);//7
// console.log(x2);//8
// console.log(y2);//8

//変数とは、値を代入するための箱
//定数とは、値を別名で定義したもの
'use strict';
let age=20;
const name="平沢唯";
console.log(`${name}さんの年齢は${age}歳です。`);
age=age+50;
console.log(`${name}さんの年齢は${age}歳です。`);
