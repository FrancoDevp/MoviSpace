    $("#btn-vermas").click(function () {
        $("#footer-mobiles").slideToggle("slow");
    if ($("#btn-vermas").html() == "Ver mas") {
        $("#btn-vermas").html("Ver menos")
    } else {
        $("#btn-vermas").html("Ver mas")
    }
              })