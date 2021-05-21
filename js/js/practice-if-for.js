'use strict';
// let i=1;
// if(i==i){
//     console.log(`真です`);
// }

// let testscore=100;
// if(testscore>=80){
//     document.write(`合格です`);
// }
// else if(testscore>=70){
//     document.write(`惜しい`);
// }
// else{
//     document.write(`不合格です`);
// }

// const namelist=['平沢','田井中','琴吹','秋山'];
// for(let i=0;i<namelist.length;i++){
//     console.log(`${i+1}.${namelist[i]}`);
// }

//contimue
// for(let i=0;i<10;i++){
//     if(i%2==0)continue;
//     console.log(i);
// }

// //break
// for(let i=0;i<1000;i++){
//     if(i>10)break;
//     console.log(i);
// }

function scorecheck(){
    let testscore= document.getElementById('score').value;
if(testscore>=80){
   document.write(`合格です`);
}
else if(testscore>=70){
    document.write(`惜しい`);
}
else{
    document.write(`不合格です`);
}
}