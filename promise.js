/* 
const serverStatus = true;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(serverStatus){
            resolve({username: "ezgiefe"});
        } else {
            reject("login error");
        }
        
    }, 2000)
});

promise.then(user => {
    console.log(user);
}).catch(err => {
    console.log("hata");
})
*/

console.log("start");

const serverStatus = true;

const login = (username, password) => {
    return new Promise((resolve, reject) => {
       setTimeout( () => {
        if(serverStatus){
            resolve({username : username, email: "ezgiefe@gmail.com"}); 
        } else {
            reject("server is offline");
        }
        }, 1000 ); 
    })
}

const getPostsByUsername = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post 1", "post 2", "post 3"]);
        }, 2000 ) 
    })
}

const getPostDetails = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("post details");
        },1000 )
    })
    
}

login("ezgiefe", "12345")
    .then(user => {
        console.log(user);
        return getPostsByUsername(user.username);
    })
    .then(posts => {
        console.log(posts);
        return getPostDetails(posts[0]);
    })
    .then(details => {
        console.log(details);
    }).catch(err => {
        console.log(err);
    })


console.log("end");
