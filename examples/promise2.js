let pro;
try{
    pro = new Promise((resolve,reject) => {
        throw Error('err....')
    })
} catch (err){
    console.log('catch',err) // will not print
}

pro.catch(err=>{
    console.log('promise', err) // will print
})
