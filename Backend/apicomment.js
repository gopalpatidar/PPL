const db=require('./modelcomments');

module.exports={
    addcoment:(data)=>{
        return new Promise((resolve,reject)=>{
            db.create(data,(err,result)=>{
                if(err)
                reject(err);
              else 
                 resolve(result);
            })
        })
    },

    showcoment:(data)=>{
     return new Promise((resolve,reject)=>{
         db.find({Postid:data},(err,result)=>{
             if(err || result.length==0)
               reject(err);
             else
               resolve(result)
         })
     })
    }
}