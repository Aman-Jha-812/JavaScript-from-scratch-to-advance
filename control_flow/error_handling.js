/* Structure of try...catch...finally 

try Block: Code that may throw an error is written here.
catch Block: Code to handle the error if it occurs.
finally block: Code that will execute regardless of whether an error occurred or not.
*/

try {
    //code
    num ;
    console.log(num);
} catch(error){
    console.log(error);
} finally {
    // Code that runs no matter what
    console.log('execution finished')
}