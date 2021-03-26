



// function firstStep(toDo, callback){
//     setTimeout(function (){
//         console.log(`Find a ${toDo}`);
//     },1000);
//
//     callback('wife');
// }

function firstStep(){
    console.log(`Find a job`);
}
function secondStep(){
    console.log(`Find a wife`);
}
const be_A_man = new Promise(function (resolve,reject){
    let are_you_A_man = true;
    if(are_you_A_man){
        resolve('Great');
    }else{
        reject("Oh Oh");
    }
})

be_A_man.then(function resolvedValue(value){
    console.log(value);
})
    .then(firstStep)
    .then(secondStep).catch();


// be_A_man.then(setTimeout(function (){
//     firstStep();
// },1000)).then(secondStep);

