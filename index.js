let loader = false;
let dataApiRest = {};
var info = document.getElementById("apiCovid");
var loadingHtml = document.getElementById("loading");

swal(
  "this site ave microtransactions so is only recomended for +18",
  "Are you +18?",

  "warning",
  {
    buttons: {
      cancelar: "i am not.",
      accept: {
        text: "i am!",
        value: "accept",
      },
    },
  }
).then((value) => {
  switch (value) {
    case "accept":
      swal("Welcome!", "Hear our new ", "success");
      break;

    case "cancelar":
      swal("continue", "But at your own risk!", "warning");
  }
});

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loader = true;
  const country = event.target.country.value;
  let url = "https://api.covid19api.com/total/dayone/country/" + country;

  loadingHtml.innerHTML = "Loading info....";

  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (!!res.message) {
        info.innerHTML = "Invalid country, please write correctly";
        setTimeout(() => {
          info.innerHTML = "";
        }, 2000);
      } else {
        dataApiRest = res.slice(-1)[0];
        info.innerHTML = `Cases confirmed: ${dataApiRest.Confirmed}
         Deaths confirmed: ${dataApiRest.Deaths}`;
        info.style.color = "red";

        setTimeout(() => {
          info.innerHTML = "";
        }, 6000);
      }
    })
    .finally(() => {
      loadingHtml.innerHTML = "";
      loader = false;
    });
});
