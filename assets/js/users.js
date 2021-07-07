var users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

var userComplete = JSON.parse(localStorage.getItem("newUser"));

function showUsers() {
  console.log("users.length", users);
  console.log("userComplete -.-.-.", userComplete);
  var showlist = document.getElementById("userRegister");

  // console.log(
  //   "(localStorage.getItem('newUser')",
  //   localStorage.getItem("newUser")
  // );

  if (userComplete === null) {
    for (let i = 0; i < users.length; i++) {
      showlist.innerHTML += `
    
    <section class="row listUsers">
    <div class="col-md-4"> 
      <div class="id" id="id"><strong>Id:</strong> <span>${users[i].id}</span> </div>
      </div>
      <div class="col-md-8"> 
      <div class="nameResult" ><strong>Name:</strong> <span>${users[i].name}</span> </div>
      </div>
      <br>
      </div>
      <div class="col-md-4"> 
         <h4>Identifier</h4>
        
        <div class="usernameResult"><strong>Username:</strong> <span>${users[i].username}</span> </div>
        <div class="emailResult"><strong>Email:</strong> <span>${users[i].email}</span> </div>
    </div>
    <div class="col-md-4">
        <div class="addressResult"> <h4>Address</h4>
            <div class="streetResult"><strong>Street:</strong> <span>${users[i].address.street}</span> </div>
            <div class="suiteResult"><strong>Suite:</strong> <span>${users[i].address.suite}</span> </div>
            <div class="cityResult"><strong>City:</strong> <span>${users[i].address.city}</span> </div>
            <div class=">zipcodeResult"><strong>Zip:</strong> <span>${users[i].address.zipcode}</span> </div>
            <div class="phoneResult"><strong>Phone:</strong> <span>${users[i].phone}</span> </div>
        <div class="websiteResult"><strong>Website:</strong><span> ${users[i].website}</span></div>
             </div>
    </div>
    <div class="col-md-4">
        <div class="CompanyResult"> <h4>Company</h4>
            <div class="nameCompanyResult"><strong>Name:</strong> <span>${users[i].company.name}</span> </div>
            <div class="catchPhraseResult"><strong>CatchPhrase:</strong> <span>${users[i].company.catchPhrase}</span></div>
            <div class="bsResult"><strong>Bs:</strong> <span>${users[i].company.bs}</span></div>
             </div>
             </div>
             <br>
         <div class="col-md-2 col-sm-6 buttonList"> 
             <input type="button" class="btn btn-primary" value="Modify" onclick="modifyUser(${users[i].id}, this)" id="modify">
             </div>
             <div class="col-md-8 col-sm-0"> </div>
             <div class="col-md-2 col-sm-6 buttonList"> 
             <input type="button" class="btn btn-primary" value="Delete" onclick="deleteList(${users[i].id}, this)" id="delete">
             </div>
    </div>
  </section>
  `;
      localStorage.setItem("newUser", JSON.stringify(users));
    }
  } else {
    for (let i = 0; i < userComplete.length; i++) {
      showlist.innerHTML += `
  
  <section class="row listUsers">
  <div class="col-md-4"> 
    <div class="id" id="id"><strong>Id:</strong> <span>${userComplete[i].id}</span> </div>
    </div>
    <div class="col-md-8"> 
    <div class="nameResult" ><strong>Name:</strong> <span>${userComplete[i].name}</span> </div>
    </div>
    <br>
    </div>
    <div class="col-md-4"> 
       <h4>Identifier</h4>
      
      <div class="usernameResult"><strong>Username:</strong> <span>${userComplete[i].username}</span> </div>
      <div class="emailResult"><strong>Email:</strong> <span>${userComplete[i].email}</span> </div>
  </div>
  <div class="col-md-4">
      <div class="addressResult"> <h4>Address</h4>
          <div class="streetResult"><strong>Street:</strong> <span>${userComplete[i].address.street}</span> </div>
          <div class="suiteResult"><strong>Suite:</strong> <span>${userComplete[i].address.suite}</span> </div>
          <div class="cityResult"><strong>City:</strong> <span>${userComplete[i].address.city}</span> </div>
          <div class=">zipcodeResult"><strong>Zip:</strong> <span>${userComplete[i].address.zipcode}</span> </div>
          <div class="phoneResult"><strong>Phone:</strong> <span>${userComplete[i].phone}</span> </div>
      <div class="websiteResult"><strong>Website:</strong><span> ${userComplete[i].website}</span></div>
           </div>
  </div>
  <div class="col-md-4">
      <div class="CompanyResult"> <h4>Company</h4>
          <div class="nameCompanyResult"><strong>Name:</strong> <span>${userComplete[i].company.name}</span> </div>
          <div class="catchPhraseResult"><strong>CatchPhrase:</strong> <span>${userComplete[i].company.catchPhrase}</span></div>
          <div class="bsResult"><strong>Bs:</strong> <span>${userComplete[i].company.bs}</span></div>
           </div>
           </div>
           <br>
       <div class="col-md-2 col-sm-6 buttonList"> 
           <input type="button" class="btn btn-primary" value="Modify" onclick="modifyUser(${userComplete[i].id}, this)" id="modify">
           </div>
           <div class="col-md-8 col-sm-0"> </div>
           <div class="col-md-2 col-sm-6 buttonList"> 
           <input type="button" class="btn btn-primary" value="Delete" onclick="deleteList(${userComplete[i].id})" id="delete">
           </div>
  </div>
</section>
`;
    }
  }

  document.getElementById("containResult").classList.add("containResult-none");
}

function deleteList(id, btn) {
  var showlist = document.getElementById("userRegister");
  console.log("userComplete ---", userComplete);

  if (userComplete === null) {
    var test = Object.entries(users);
    test.find((user) => {
      if (user[1].id === id) {
        users.splice(user[0], 1);
      }
    });
    localStorage.removeItem("newUser");
    localStorage.setItem("newUser", JSON.stringify(users));
  } else {
    var test1 = Object.entries(userComplete);
    test1.find((user) => {
      if (user[1].id === id) {
        userComplete.splice(user[0], 1);
      }
    });

    localStorage.removeItem("newUser");
    localStorage.setItem("newUser", JSON.stringify(userComplete));
  }
  showlist.innerHTML = "";
  showUsers();
}

function modifyUser(id, btn) {
  var row = btn.parentNode;
  console.log("id", id);
  console.log("row", row);

  if (userComplete === null) {
    const userSelected = users.find((user) => user.id === id);
    row.parentNode.innerHTML = `
    
    <section class="row listUsers">
    <div class="col-md-4"> 
      <div class="id" id="id"><strong>Id:${userSelected.id}</strong> <span></span> </div>
      </div>
      <div class="col-md-8"> 
      <div class="nameResult" ><strong>Name:</strong> <span><input id="name${userSelected.id}" class="editUser" type="text" value="${userSelected.name}"></span> </div>
      </div>
      <br>
      </div>
      <div class="col-md-4"> 
         <h4>Identifier</h4>
        
        <div class="usernameResult"><strong>Username:</strong> <span><input class="editUser" type="text" value="${userSelected.username}" ></span> </div>
        <div class="emailResult"><strong>Email:</strong> <span><input class="editUser" type="text" value="${userSelected.email}"></span> </div>
    </div>
    <div class="col-md-4">
        <div class="addressResult"> <h4>Address</h4>
            <div class="streetResult"><strong>Street:</strong> <span><input class="editUser" type="text" value="${userSelected.address.street}"></span> </div>
            <div class="suiteResult"><strong>Suite:</strong> <span><input class="editUser" type="text" value="${userSelected.address.suite}"></span> </div>
            <div class="cityResult"><strong>City:</strong> <span><input class="editUser" type="text" value="${userSelected.address.city}"></span> </div>
            <div class=">zipcodeResult"><strong>Zip:</strong> <span><input class="editUser" type="text" value="${userSelected.address.zipcode}"></span> </div>
            <div class="phoneResult"><strong>Phone:</strong> <span><input class="editUser" type="text" value="${userSelected.phone}"></span> </div>
        <div class="websiteResult"><strong>Website:</strong><span> <input class="editUser" type="text" value="${userSelected.website}"></span></div>
             </div>
    </div>
    <div class="col-md-4">
        <div class="CompanyResult"> <h4>Company</h4>
            <div class="nameCompanyResult"><strong>Name:</strong> <span><input class="editUser" type="text" value="${userSelected.company.name}"></span> </div>
            <div class="catchPhraseResult"><strong>CatchPhrase:</strong> <span><input class="editUser" type="text" value="${userSelected.company.catchPhrase}"></span></div>
            <div class="bsResult"><strong>Bs:</strong> <span><input class="editUser" type="text" value="${userSelected.company.bs}" ></span></div>
             </div>
             </div>
             <br>
         <div class="col-md-2 col-sm-6 buttonList"> 
             <input type="button" class="btn btn-primary" value="Acepted" onclick="aceptarChange(${userSelected.id},this)" id="acepted">
             </div>
             <div class="col-md-8 col-sm-0"> </div>
             <div class="col-md-2 col-sm-6 buttonList"> 
             <input type="button" class="btn btn-primary" value="Cancel" onclick="cancelChange(this)" id="cancel">
             </div>
    </div>
  </section>
  `;
  } else {
    const userSelected = userComplete.find((user) => user.id === id);
    row.parentNode.innerHTML = `
    
    <section class="row listUsers">
    <div class="col-md-4"> 
      <div class="id" id="id"><strong>Id:${userSelected.id}</strong> <span></span> </div>
      </div>
      <div class="col-md-8"> 
      <div class="nameResult" ><strong>Name:</strong> <span><input id="name${userSelected.id}" class="editUser" type="text" value="${userSelected.name}"></span> </div>
      </div>
      <br>
      </div>
      <div class="col-md-4"> 
         <h4>Identifier</h4>
        
        <div class="usernameResult"><strong>Username:</strong> <span><input id="username${userSelected.id}" class="editUser" type="text" value="${userSelected.username}" ></span> </div>
        <div class="emailResult"><strong>Email:</strong> <span><input id="email${userSelected.id}" class="editUser" type="text" value="${userSelected.email}"></span> </div>
    </div>
    <div class="col-md-4">
        <div class="addressResult"> <h4>Address</h4>
            <div class="streetResult"><strong>Street:</strong> <span><input id="street${userSelected.id}" class="editUser" type="text" value="${userSelected.address.street}"></span> </div>
            <div class="suiteResult"><strong>Suite:</strong> <span><input id="suite${userSelected.id}" class="editUser" type="text" value="${userSelected.address.suite}"></span> </div>
            <div class="cityResult"><strong>City:</strong> <span><input id="city${userSelected.id}" class="editUser" type="text" value="${userSelected.address.city}"></span> </div>
            <div class=">zipcodeResult"><strong>Zip:</strong> <span><input id="zipcode${userSelected.id}" class="editUser" type="text" value="${userSelected.address.zipcode}"></span> </div>
            <div class="phoneResult"><strong>Phone:</strong> <span><input id="phone${userSelected.id}" class="editUser" type="text" value="${userSelected.phone}"></span> </div>
        <div class="websiteResult"><strong>Website:</strong><span> <input id="website${userSelected.id}" class="editUser" type="text" value="${userSelected.website}"></span></div>
             </div>
    </div>
    <div class="col-md-4">
        <div class="CompanyResult"> <h4>Company</h4>
            <div class="nameCompanyResult"><strong>Name:</strong> <span><input id="nameCompany${userSelected.id}" class="editUser" type="text" value="${userSelected.company.name}"></span> </div>
            <div class="catchPhraseResult"><strong>CatchPhrase:</strong> <span><input id="catchPhrase${userSelected.id}" class="editUser" type="text" value="${userSelected.company.catchPhrase}"></span></div>
            <div class="bsResult"><strong>Bs:</strong> <span><input id="bs${userSelected.id}" class="editUser" type="text" value="${userSelected.company.bs}" ></span></div>
             </div>
             </div>
             <br>
         <div class="col-md-2 col-sm-6 buttonList"> 
             <input type="button" class="btn btn-primary" value="Acepted" onclick="aceptarChange(${userSelected.id},this)" id="acepted">
             </div>
             <div class="col-md-8 col-sm-0"> </div>
             <div class="col-md-2 col-sm-6 buttonList"> 
             <input type="button" class="btn btn-primary" value="Cancel" onclick="cancelChange(this)" id="cancel">
             </div>
    </div>
  </section>
  `;
  }
}

function aceptarChange(id, btn) {
  var row = btn.parentNode.parentNode;
  console.log("id", id);
  console.log("row", row);

  if (userComplete === null) {
    users.find((user) => {
      console.log("user.id", user.id);
      console.log("id", user.id === id);

      if (user.id === id) {
        user.name = document.getElementById("name" + user.id).value;
        console.log("user.name", user.name);
      }
    });
    localStorage.setItem("newUser", JSON.stringify(users));
  } else {
    userComplete.find((user) => {

      if (user.id === id) {
        user.name = document.getElementById("name" + user.id).value;
        user.username = document.getElementById("username" + user.id).value;
        user.email = document.getElementById("email" + user.id).value;
        user.street = document.getElementById("street" + user.id).value;
        user.suite = document.getElementById("suite" + user.id).value;
        user.city = document.getElementById("city" + user.id).value;
        user.zipcode = document.getElementById("zipcode" + user.id).value;
        user.phone = document.getElementById("phone" + user.id).value;
        user.website = document.getElementById("website" + user.id).value;
        user.nameCompany = document.getElementById("nameCompany" + user.id).value;
        user.catchPhrase = document.getElementById("catchPhrase" + user.id).value;
        user.bs = document.getElementById("bs" + user.id).value;
  
        console.log("user.name", user.name);
      }
    });  
    localStorage.setItem("newUser", JSON.stringify(userComplete));
  }
alert("Se han guardado lo cambios")
  
}

function cancelChange() {
  var showlist = document.getElementById("userRegister");
  showlist.innerHTML = "";
  showUsers();
}
