$("#portabilidad").click(function () {
    $("#info-portabilidad").slideToggle("slow");
  })

  let enviarPlan = document.getElementById("celular");
  console.log(enviarPlan);

  function habilitarPlan() {
    if (numeroCelular.value !== '') {
      enviarPlan.disabled = false;
    } else {
      enviarPlan.disabled = true;
    }
  }

  numeroCelular.addEventListener("blur", habilitarPlan);
  document.getElementById("celular").addEventListener("click", () => { });
