// (function(){
//   'use strict';
//
//   $(document).ready(function(){
//     $('body').prepend(JST['application']());
//   });
// })();

(function(){
  'use strict';

  $(document).ready(function(){
    $.ajax({
      url: "https://api.github.com/user",
      headers: {
        "Authorization": "token " + GITHUB_TOKEN
      }
    }).then(function(user) {
      console.log(user);
    });
  });

  $(document).ready(function(e){
    var code = window.location.href.match(/\?code=(.*)/)[1];
    if(code) {
      $.getJSON('http://localhost:9999/authenticate/'+code, function(data) {
       console.log(data);
      });
    }
  });

  $('button').on('click', function(e){
    window.location.replace('https://github.com/login/oauth/authorize?client_id=365d670e510fb8a44ecb');
  });
})();
