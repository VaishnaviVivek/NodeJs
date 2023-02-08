var fs=require('fs');

fs.rename('fie1.txt','demofile1.html',function(err){
    if(err) throw err;
    console.log('Renamed');
})