var fs=require('fs');

fs.writeFile('mynewfile3.txt','Hello',function(err){
    if(err) throw err;
    console.log('Saved!')
})