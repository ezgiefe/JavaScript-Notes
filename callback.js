/*  Asenkron işlemler 2 saniye sürecek olan işlem için beklemede olan işlemi bekletmeden onu da başlatmak. 
    settimeout kullanıyoruz burda çünkü normalde bazı işlemler zaman alıyor bunu yaratmaya çalıştık
    callback hell => iç içe çok fazla işlem olduğunda karışıyor durumlar bu yüzden hell deniyor
    promise yöntemi bu durumlarda daha pratik
*/

console.log("start");

const login = (username, password, callback) => {
    setTimeout( () => {
        callback({username : username, email: "ezgiefe@gmail.com"}) 
    },1000 );
}

const getPostsByUsername = (username, callback) => {
    setTimeout(() => {
        callback(["post 1", "post 2", "post 3"]);
    },2000 )
}

const getPostDetails = (post, callback) => {
    setTimeout(() => {
        callback("post details");
    },1000 )
}

login("ezgiefe", "12345", user => {
    console.log(user.username);
    console.log(user.email);

    getPostsByUsername(user.username, (posts) => {
        console.log(posts);

        getPostDetails(posts[0], (details) => {
            console.log(details);
        })
    });
});

console.log("end");