obj1 = {
    username : "khan",
    password : "nahi_bataunga"
}
obj2 = {
    username : "me",
    password : "kyun_bataun"
}
database = [obj1,obj2]
newsfeed = [newsobj1 = {
                        username : "khan",
                        timeline : "sports"
                    },
            newsobj2  = {
                        username : "me",
                        timeline : "politics"
            }  
        ]
var crntUser;
function isUsrValid(usr,psw) {
    for(i=0; i<database.length; i++) {
        console.log(database[1].username)
        if(database[i].username = usr && database[i].password == psw) {
            crntUser = i
            console.log(crntUser)
            return true
        }
    }
    return false
}
function signIn(usr,psw) {
    if(isUsrValid(usr,psw)){
        document.write('<h1>' + newsfeed[crntUser].username + '</h1>');
        document.write('<p style="color:red">' + newsfeed[crntUser].timeline)
    }
    else {
        alert('Not Logged In')
    }
}
let usr = prompt("Write your user name");
let psw = prompt("type your pssword");
signIn(usr,psw)