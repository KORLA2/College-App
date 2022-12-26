let promise=Goutham();   // It is async function returns promise

promise.then(homework=>{

//After Goutham completes his home work then only Prabhath can complete his home work 
Prabhath(homework);

})



function Goutham() {}function Prabhath() {}