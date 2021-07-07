const expresiones = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/,
};
var userRegister = [
  {
    name: "Aitor Serena",
    photo: "",
    email: "aitor.serena@gmail.com",
    password: "1234",
    role: "admin",
  },
  {
    name: "Maria Jose",
    photo:
      "https://previews.123rf.com/images/jackf/jackf1908/jackf190808406/129082800-office-worker-woman-is-working-at-a-computer-and-talking-by-headset-with-client-in-the-office.jpg",
    email: "mjose@gmail.com",
    password: "1234",
    role: "admin",
  },
  {
    name: "Pablo Gonzalez",
    photo:
      "https://thumbs.dreamstime.com/z/man-office-portrait-male-worker-122153529.jpg",
    email: "pgonzalez@gmail.com",
    password: "123456789",
    role: "admin",
  },
  {
    name: "Rocio Madrid",
    photo:
      "https://previews.123rf.com/images/jackf/jackf1709/jackf170900449/85235976-attractive-female-office-worker-at-workplace-making-welcome-gesture.jpg",
    email: "mmadrid@gmail.com",
    password: "1234",
    role: "user",
  },
];

const campos = {
  Email: false,
  Password: false,
};

const formulario = document.getElementById("formularioLogin");
const inputs = document.querySelectorAll("#formularioLogin input");

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "email":
      validarCampo(expresiones.email, e.target, "Email");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "Password");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo${campo} .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo${campo}`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo${campo} .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  console.log("input", input);
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

function loadDoc(params) {
  console.log("entroooo");
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("pageUser").innerHTML = this.responseText;
  };
  xhttp.open("GET", `${params}.html`);
  xhttp.send();
}

formulario.addEventListener("click", (e) => {
  e.preventDefault();

  const terminos = document.getElementById("CheckValider");
  if (campos.Email && campos.Password && terminos.checked) {
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    document
      .getElementById("formulario__mensaje")
      .classList.remove("formulario__mensaje-activo");
    document
      .getElementById(`grupoEmail`)
      .classList.remove("formulario__grupo-correcto");
    document
      .getElementById(`grupoPassword`)
      .classList.remove("formulario__grupo-correcto");

    var emailResult = document.getElementById("email").value;
    var passResult = document.getElementById("password").value;

    for (i = 0; i < userRegister.length; i++) {
      // console.log("userRegister.length", userRegister.length)
      //   console.log("userRegister[i].email", userRegister[i].email);
      console.log("i", i);
      console.log("userRegister.length", userRegister.length);

      if (
        userRegister[i].email === emailResult &&
        userRegister[i].password === passResult
      ) {
        var login = {
          email: emailResult,
          password: passResult,
          role: userRegister[i].role,
        };

        localStorage.setItem("login", JSON.stringify(login));

        loadDoc("register");
        return;
      } else if (
        i + 1 === userRegister.length &&
        (userRegister[i].email !== emailResult ||
          userRegister[i].password !== passResult)
      ) {
        console.log("entrooooooooooooooooooo");
        alert(
          "Los datos introducidos no coinciden con ningún usuario registrado"
        );
      }
    }
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
    document
      .getElementById("formulario__mensaje-exito")
      .classList.remove("formulario__mensaje-exito-activo");
  }
});
