// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  // Code for Dropdown T-Shirt Size
  $("#custom").hide();

  $(document).on("change", "#t-shirt", chkTshirt);

  function chkTshirt() {
    var tshirt = $("#t-shirt").val();
    //alert(tshirt);

    if (tshirt == "Custom") {
      //alert(tshirt);
      $("#custom").removeAttr("disabled");
      $("#custom").attr("required", true);
      $("#custom").show();
    } // End of if T-Shirt
    else {
      $("#custom").hide();
      $("#custom").attr("disabled", true);
      $("#custom").removeAttr("required");
      $("#custom").val("");
    } // End of if else T-Shirt
  } // End of chkTshirt
  // Code for Dropdown T-Shirt Size
});
// End Document Ready

// Time of Day Checkboxes Code
$(document).on("click", ".submit, .checkbox", chkCheckboxes);

function chkCheckboxes() {
  var i = 0;
  $(".checkbox").each(function () {
    var checkbox_value = $(this).val();

    if ($(this).is(":checked")) {
      i = i + 1;

      $(".checkbox").removeAttr("required");
    } else {
      if (i < 1) {
        $(".checkbox").attr("required", true);
      }
    } //End of else Unchecked
  }); //End of each
} //Function

// End of Time of Day Code

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
