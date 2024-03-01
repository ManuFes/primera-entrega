/********************************************
 *    función de validación
 */

function validacion() {
   let correcto = true; 
   let nombre = document.getElementById('nombre').value; // getter
   let apellidos = document.getElementById('apellidos').value; // getter
   let email = document.getElementById('email').value;
   let pass = document.getElementById('pass').value;
   let provincia = document.getElementById('provincia').value;
   let terminos = document.getElementById('terminos').value;


   if (nombre == "" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ]{2,}/.test(nombre)) {
      document.getElementById('nombreHelp').style.visibility = "visible";
      document.getElementById('nombre').style.borderColor = "red";
      // no debería volverse aquí el return false;
      correcto = false;
   }



   if (apellidos == "" || /^\s+$/.test(apellidos)  || /[0-9]/.test(apelllidos) || !/[a-zñ]{2,}/.test(apellidos)) {
      document.getElementById('apellidosHelp').style.visibility = "visible";
      document.getElementById('apellidos').style.borderColor = "red";
      // no debería volverse aquí el return false;

      correcto = false;
   }



   if (email == "" || ! /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/.test(email)
   ) {
      document.getElementById('emailHelp').style.visibility = "visible";
      document.getElementById('email').style.borderColor = "red";
      // no debería volverse aquí el return false;

      correcto = false;
   }

   if (email == "" || ! /[A-ZÑ]+/.test(pass) || ! /[a-zñ]+/.test(pass) || ! /[0-9]+/.test(pass) || ! /[.,:;+-_&%$·"!?¿¡'=]/.test(pass)  || (pass.length>=8 && pass.length<=15)) {
      document.getElementById('passHelp').style.visibility = "visible";
      document.getElementById('pass').style.borderColor = "red";
      // no debería volverse aquí el return false;

      correcto = false;
   }


   if (provincia == 0) {
      document.getElementById('provinciaHelp').style.visibility = "visible";
      document.getElementById('provincia').style.borderColor = "red";
      // no debería volverse aquí el return false;

      correcto = false;
   }


   // NO VALIDO EL SEXO, POR QUE PONGO OTRO POR DEFECTO


   if (! terminos.checked) {
      document.getElementById('terminosHelp').style.visibility = "visible";
      document.getElementById('terminos').style.borderColor = "red";
      // no debería volverse aquí el return false;

      correcto = false;
   }


   return correcto;
   


}




function resetear(id) {



   document.getElementById(id + 'Help').style.visibility = "hidden";
   document.getElementById(id).style.borderColor = "lightgray";
}