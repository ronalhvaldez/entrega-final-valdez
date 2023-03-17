const form = document.getElementById("formData");
const successMessage = document.getElementById("succesMessage");
const failedMessage = document.getElementById("failedMessage");
const lastMessage = document.getElementById("lastMessage");

let name = "";
let surname = "";
let sex = "";
let message = "";

let data = {};
if (localStorage.length > 0) {
  const getData = localStorage.getItem("data");
  data = JSON.parse(getData);
  lastMessage.innerHTML = `El ultimo mensaje fue de ${data.name} y nos dijo lo siguiente: ${data.message}`;
  lastMessage.style.display = "block";
}

console.log(localStorage);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  name = e.target.name.value;
  surname = e.target.surname.value;
  sex = e.target.sex.value;
  message = e.target.message.value;

  if (!name.length || !surname.length || !sex.length || !message.length) {
    failedMessage.innerHTML = "Tenes que completar todos los datos";
    failedMessage.style.display = "block";
    setTimeout(() => {
      failedMessage.style.display = "none";
    }, 2000);
  } else {
    const convertData = JSON.stringify(
      {
        name: name,
        surname: surname,
        sex: sex,
        message: message,
      },
      Toastify({
        text: "Check your email for confirmation",
        className: "info",
        gravity: "bottom",
        position: "right",
        style: {
          background: "#144d34",
        },
      }).showToast()
    );

    localStorage.setItem("data", convertData);

    successMessage.innerHTML = "Se cargaron los datos correctamente";
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000);
  }
});
