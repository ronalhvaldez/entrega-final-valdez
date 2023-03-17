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
