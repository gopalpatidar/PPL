const db=require('./modelpost');
module.exports={
    userpost:(data)=>{
        return new Promise((resolve,reject)=>{
        db.create(data ,function(err,result){
            if(err)
            reject(err);
          else 
             resolve(result);
        })
    })
    },

    showpost:()=>{
        return new Promise((resolve,reject)=>{
            db.find({},(err,result)=>{
                if(err || result.length===0)
                  reject(err);
                else 
                   resolve(result);
            })
        })
    },

    likepost:(data)=>{
        return new Promise((resolve,reject)=>{
              db.updateOne({_id:data.postId},{ $addToSet: { likes: data.userName } },(err,result)=>{
                      if(err)
                         reject(err);
                      else {
                        if(result.nModified==0){
                            db.updateOne({_id: data.postId,likes: data.userName},{ $pull: { likes: data.userName } },(err,result)=>{
                                   if(err)
                                     reject(err)
                                    else{   
                                      resolve(result)
                                    }

                            })
                        } else
                           resolve(result)
                      }
              })
        })
    },
    
    showlikes:(data)=>{
        return new Promise((resolve,reject)=>{
            db.find({_id: data.postId},(err,result)=>{
                if(err || result.length===0){
                  reject(err);
                }
                else 
                   resolve(result);
            })
        })
    },



}