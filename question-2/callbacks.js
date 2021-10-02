const delayedSuccess = () => {
    setTimeout(()=>{
        let success = {'message':'delayed success!'}
        console.log(success);
    },500)
}

const delayedException = () => {
    setTimeout(()=>{
        try{
            throw new Error('error: delayed exception!');
        }
        catch(e){
            console.log(e);
        }
    },500)
}

const resolvedPromise = () => {
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            resolve("{ message : 'delayed success!' }");
        },500);
    });
}

const rejectedPromise = () => {
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            reject("{ error: 'delayed exception!' }");
        },500);
    });
}

delayedSuccess()
delayedException()


resolvedPromise().then(
    res => console.log(res),
    err => console.log(err)
)
rejectedPromise().then(
    res => console.log(res),
    err => console.log(err)
)