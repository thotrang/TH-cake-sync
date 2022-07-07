 let isKayoSick=true;
const onMyBirday= (isKayoSick)=>{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(!isKayoSick){
                resolve(2);
            }else{
                reject(new Error("I'm sad"));
            }
        },1000)
    });
}

onMyBirday(isKayoSick)
    .then((result)=>{
        console.log(`I have ${result} cakes`);
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        console.log("Party"); 
    });