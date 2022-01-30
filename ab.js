var user =[{"Name":"Rahul",
           "Email":"rahul@gmail.com"},
           {"Name":"Pinky",
           "Email":"p5@gmail.com"},
           {"Name":"Amit",
           "Email":"a2@gmail.com"}
        ]
        for(user3 of user )
        {console.log("user.Email")}

        var calc = {
                    add:function(x,y){return document.write (x+y)},
                    sum:(x,y)=>{return document.write (x/y)}   
}

var newq={
        first:(q1)=>{return `name of ${q1}`},
        second:(q2,d1)=>{return `name of ${q2} is equal to ${d1}`},
        Third:(q3,d2,a5)=>{return`role of ${q3} is ${d2} is ${a5}`}

}
newq.Third('ab','cd','ef')
'name of ab is cd is ef'