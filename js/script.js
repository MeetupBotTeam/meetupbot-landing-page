(function(){
  var _form = document.getElementById('feedback-form');
  _form.onsubmit = function(){
    var name = _form.Name.value;
    var email = _form._replyto.value;
    var message = _form.Message.value;
    var msg = "Please Enter";
    msg += name == "" ? " Your Name," : "";
    msg += email == "" ? " Your Email," : "";
    msg += message == "" ? " Message. These Fields can't be blank." : "";
    if(name=="" || email == "" || message == ""){
      alert(msg);
      return false;
    }else{
      return true;
    }
  };
})();
