//Promise:
// An object representing the eventual completion or failure of an asynchronous operation.
//*Introduce to solve callback limitations
//*provides cleaner chaining of asynchronous operations
// *Has three states: pending, fulfilled, rejected
// *Allows .then() and .catch() for handling results and errors

function fetchUserDataPromise(userId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if(userId){
            const user = {
                id: userId,
                name: 'Ram',
                email: 'ram@example.com'
            }
            resolve(user);
        }
        else{
            reject(new Error('Invalid user Id'));
        }
    }, 1000);

    })
}

//usage
fetchUserDataPromise(12345) 
.then((result)=>{
    //resolve
    console.log(result);
})
.catch((err)=>{
    //reject
    console.log('Catch error:', err);
})

fetchUserDataPromise(12) 
.then((result)=>{
    //resolve
    console.log(result);
})
.catch((err)=>{
    //reject
    console.log('Catch error:', err);
})
.finally(()=>{ //optional
    console.log('task completed');
})


//promise.all()

Promise.all([
    fetchUserDataPromise(1),
    fetchUserDataPromise(2),
    fetchUserDataPromise(3)
])
.then((results)=>{
    console.log(results);
})
.catch((error)=>{
    console.log(error);
})