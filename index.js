
//Q1.
function a(name){
    console.log("js"+name);
}
function b(callback){
    let age = 21;
    callback(name);
}
b(a);

//Q2.
const getNumber = () =>{
    setTimeout(() =>{
        let num =[1,2,3,4,5,6,7];
        console.log(num);

        setTimeout(() =>{
            let getDetails ={
                n1:1,
            }
            console.log(`1 print after 1 sec ${getDetails.n1}`);

            setTimeout(() =>{
                getDetails.n2 =2;
                console.log(`2 print after 2 sec ${getDetails.n2}`);

                setTimeout(() =>{
                    getDetails.n3 =3;
                    console.log(`3 print after 3 sec ${getDetails.n3}`);

                    setTimeout(()=>{
                        getDetails.n4 =4;
                        console.log(`4 print after 4 sec ${getDetails.n4}`);


                        setTimeout(() => {
                            getDetails.n5 =5;
                            console.log(`5 print after 5 sec ${getDetails.n5}`);
                            

                            setTimeout(() =>{
                                getDetails.n6 =6;
                                console.log(`6 print after 6 sec ${getDetails.n6}`);

                                setTimeout(() => {
                                    getDetails.n7 =7;
                                    console.log(`7 print after 7 sec ${getDetails.n7}`);

                                }, 7000)

                            },6000);


                        }, 5000);


                    },4000);

                },3000);

            },2000);

        },1000);
    })
}
getNumber();

//Q3.
let promise = new Promise((resolve,reject)=>{
    resolve();
})
promise.then(()=>{
    for(let i=1;i<=7;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
})

//Q4.
let promise1 =(str) => new Promise((resolve,reject)=>{
    if(str=="yes"){
        resolve();
    }
    else{
        reject();
    }
})
promise1("yes").then(()=>{
    console.log("promise resolved");
}).catch(()=>{
    console.log("promise rejected");
})


//Q5.
async function tryingPromise(){
    console.log("inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("before response");
    const users = await response.json();
    console.log("user resolved");


    return users;

}

console.log("before calling the function");
let data = tryingPromise();
console.log("After calling the function");
console.log(data);
data.then((res) =>{
    console.log(res);
});
