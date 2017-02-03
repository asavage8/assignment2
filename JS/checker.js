
      var catNode = document.getElementById("catName");
      var catColorNode = document.getElementById("catColor");
      var catSizeNode = document.getElementById("catSize");
      var ownerNameNode = document.getElementById("ownerName");
      var ownerPhoneNode = document.getElementById("ownerPhone");
      var submitNode = document.getElementById("submitButton");

      catNode.addEventListener("change", chkCatName, false);
      catColorNode.addEventListener("change", chkCatColor, false);
      catSizeNode.addEventListener("change", chkCatSize, false);
      ownerNameNode.addEventListener("change", chkOwnerName, false);
      ownerPhoneNode.addEventListener("change", chkOwnerPhone, false);
      submitNode.addEventListener("click",screenOff , false);

//----------------------------------------------------------------------------------------------------------
      function chkCatName(event) {
        var regex = /^[a-zA-Z]*$/;
        var myName = event.currentTarget;
        if (!regex.test(myName.value)) {
          alert("The name you entered " + myName.value +
                " is not in the correct form. \n"+
                "Please enter letters only\n");
         }
      }

      function chkCatColor(event){
        var regex = /^[a-zA-Z]*$/;
        var myColor = event.currentTarget;
        if (!regex.test(myColor.value)) {
          alert("The color you entered " + myColor.value +
                " is not in the correct form. \n" );
         }
      }

      function chkCatSize(event){
        var mySize = event.currentTarget.value;
        if(!(mySize == "Petite" || mySize == "petite" ||
            mySize =="Regular" ||  mySize == "regular" ||
            mySize == "Fat" || mySize == "fat")){
          alert("The size you entered " + mySize +
                " is not in the correct form. \n "+
                " Please enter (Petite, Regular, Fat)\n"+ mySize);
        }
      }

      function chkOwnerName(event){
        var regex = /^[-a-zA-Z_.]* [-a-zA-Z_.]*$/;
        var myOwnerName = event.currentTarget;
          if (!regex.test(myOwnerName.value)) {
          alert("The name you entered " + myOwnerName.value +
                " is not in the correct form. \n "+
                " Please enter (First Last)\n" );
         }
      }

      function chkOwnerPhone(event) {
        var regex = /^\d{3}\-\d{3}\-\d{4}$/
        var myPhone = event.currentTarget;
        if (!regex.test(myPhone.value)) {
          alert("The phone number you entered " + myPhone.value +
                " is not in the correct form. \n" +
                "The correct form is: ddd-ddd-dddd \n" +
                "Please go back and fix your phone number");
        }
      }

      function submitForm(){
        var a = /^[a-zA-Z]*$/.test(document.getElementById("catName").value)
        var b = /^[a-zA-Z]*$/.test(document.getElementById("catColor").value);
        var c = document.getElementById("catSize").value;
        var d = /^[-a-zA-Z_.]* [-a-zA-Z_.]*$/.test(document.getElementById("ownerName").value);
        var e = /^\d{3}\-\d{3}\-\d{4}$/.test(document.getElementById("ownerPhone").value);

        if(!(c == "Petite" || c == "petite" || c =="Regular" ||
            c == "regular" || c == "Fat" || c == "fat")){
              c=1;
            }

        if(!a){
         alert("Cat Name Error: Format Incorrect");
         return false;
        } else if(!b){
         alert("Cat Color Error: Format Incorrect");
         return false;
        } else if(!d){
         alert("Owner Name Error: Format Incorrect");
         return false;
       } else if(!c){
          alert("Cat Size Error: Use Exact Format");
          return false;
        }else if(!e){
         alert("Owner Phone Error: Format Incorrect");
         return false;
        }else{
         alert("Congrates your cat is the cutest!!!!\n"+
               "We will be in conact with your photoshoot.");
        return true;
        }
      }


      function screenOff(event){
        var decide = submitForm();
        if(!decide){
          event.preventDefaullt();
        }else{
          document.getElementById("myForm").style.visibility = 'hidden';
        }
      }
