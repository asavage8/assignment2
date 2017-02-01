
      var catNode = document.getElementById("catName");
      var catColorNode = document.getElementById("catColor");
      var catSizeNode = document.getElementById("catSize");
      var ownerNameNode = document.getElementById("ownerName");
      var ownerPhoneNode = document.getElementById("ownerPhone");
      var submitNode = document.getElementById("submitButton");

      catNode.addEventListener("change", chkCatName, false);
      catColorNode.addEventListener("change", chkCatColor, false);
      catSizeNode.addEventListener("change", chkCatName, false);
      ownerNameNode.addEventListener("change", chkOwnerName, false);
      ownerPhoneNode.addEventListener("change", chkOwnerPhone, false);
      submitNode.addEventListener("click",submitForm , false);

      var form = document.getElementById("myForm");
      form.reset();

//----------------------------------------------------------------------------------------------------------
      function chkCatName(event) {

        var myName = event.currentTarget;
        var pos = myName.value.match("^[a-zA-Z]+$");
        if (pos = null) {
          alert("The name you entered " + myName.value +
                " is not in the correct form. \n"+
                "Please enter letters only\n" );
         }
      }

      function chkCatColor(event){
        var myColor = event.currentTarget;
        var pos = myColor.value.match("^[a-zA-Z]+$");

        if (pos != null) {
          alert("The color you entered " + myColor.value +
                " is not in the correct form. \n" );
         }
      }

      function chkCatSize(event){
        var mySize = event.currentTarget;
        var pos = mySize.value.search(/^[A-Z][a-z]\.?$/);
      }

      function chkOwnerName(event){
        var myOwnerName = event.currentTarget;
        var pos = myOwnerName.value.search(/^[A-Z][a-z], ?[A-Z]\.?$/);
        if (pos = null) {
          alert("The name you entered " + myName.value +
                " is not in the correct form. \n "+
                " Please enter (First Middle Last)\n" );
         }
      }

      function chkOwnerPhone(event) {
        var myPhone = event.currentTarget;
        var pos = myPhone.value.match(/^\d{3}-\d{3}-\d{4}$/);

        if (pos = null) {
          alert("The phone number you entered (" + myPhone.value +
                ") is not in the correct form. \n" +
                "The correct form is: ddd-ddd-dddd \n" +
                "Please go back and fix your phone number");
        }
      }

      function submitForm(event){
        alert("Congrates your cat is the cutest!!!!");
        document.getElementById("myForm").style.visibility = 'hidden';
      }
