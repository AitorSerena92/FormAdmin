
// REGISTRAR NUEVO USUARIO

function saveUser() {
  // console.log("users", users);

  var name = document.getElementById("newName").value;
  var userName = document.getElementById("newUserName").value;
  var email = document.getElementById("newEmail").value;
  var street = document.getElementById("newStreet").value;
  var suite = document.getElementById("newSuite").value;
  var city = document.getElementById("newCity").value;
  var zipcode = document.getElementById("newZipCode").value;
  var phone = document.getElementById("newPhone").value;
  var website = document.getElementById("newWebsite").value;
  var nameCompany = document.getElementById("newNameCompany").value;
  var catchPhrase = document.getElementById("newCatchPhrase").value;
  var bs = document.getElementById("newBs").value;

  if (email && name && userName && email  && phone && website) {
    console.log("email", email);
    console.log("name", name);
    console.log("userName", userName);

    if (userComplete === null) {
      users.push({
        id: users.length + 1,
        name: `${name}`,
        username: `${userName}`,
        email: `${email}`,
        address: {
          street: `${street}`,
          suite: `${suite}`,
          city: `${city}`,
          zipcode: `${zipcode}`,
        },
        phone: `${phone}`,
        website: `${website}`,
        company: {
          name: `${nameCompany}`,
          catchPhrase: `${catchPhrase}`,
          bs: `${bs}`,
          
        },
      });
      for (var i = 0; i < users.length; i++) {
        userComplete[i].id = i + 1;
      }
      console.log("entro al if");
      localStorage.setItem("newUser", JSON.stringify(users));
    } else {
      userComplete.push({
        id: userComplete.length + 1,
        name: `${name}`,
        username: `${userName}`,
        email: `${email}`,
        address: {
          street: `${street}`,
          suite: `${suite}`,
          city: `${city}`,
          zipcode: `${zipcode}`,
        },
        phone: `${phone}`,
        website: `${website}`,
        company: {
          name: `${nameCompany}`,
          catchPhrase: `${catchPhrase}`,
          bs: `${bs}`,
        },
      });

      for (var i = 0; i < userComplete.length; i++) {
        userComplete[i].id = i + 1;
      }
      localStorage.setItem("newUser", JSON.stringify(userComplete));
      console.log("entro al else");
      console.log("userComplete .............", userComplete);
    }

    var showlist = document.getElementById("userRegister");
    showlist.innerHTML = "";

    showUsers();
  } else {
    alert("Rellena todo el formulario antes de incluir un nuevo usuario")
  }
}

function test() {
  console.log("loooool");
  var lol = document.querySelector(".formAddUser");
  if (JSON.parse(localStorage.getItem("login")).role !== "admin") {
    setTimeout(() => {
      lol.style.display = "none";
    }, 500);
  }
}
