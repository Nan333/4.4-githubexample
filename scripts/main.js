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
      console.log(JST['user'](user));
      $(".sidebar").append(JST['user'](user));
    });

    $.ajax({
      url: "https://api.github.com/user/repos",
      headers: {
        "Authorization": "token " + GITHUB_TOKEN
      }
    }).then(function(repos) {
      console.log(repos);
      $(".repositories").append(JST['repositories'](repos));
    });
  });
})();
