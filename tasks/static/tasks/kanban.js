var $1tasks = $('#1tasks');
var $2tasks = $('#2tasks');
var $3tasks = $('#3tasks');
var $4tasks = $('#4tasks');


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
deleteButton = $('<button />').addClass('deleteButton').text('Delete');

$.get('http://localhost:8000/api/tasks/', function(tasks){
  tasks.results.forEach(function(task) {
    if (task.priority==1) {
    console.log(task)
    var $li = $('<li>');
    $li.text(task.title);
    $li.appendTo($1tasks);
  }
})
})

$.get('http://localhost:8000/api/tasks/', function(tasks){
  tasks.results.forEach(function(task) {
    if (task.priority==2) {
    console.log(task)
    var $li = $('<li>');
    $li.text(task.title);
    $li.appendTo($2tasks);
  }
})
})


$.get('http://localhost:8000/api/tasks/', function(tasks){
  tasks.results.forEach(function(task) {
    if (task.priority==3) {
    console.log(task)
    var $li = $('<li>');
    $li.text(task.title);
    $li.appendTo($3tasks);
  }
})
})


$.get('http://localhost:8000/api/tasks/', function(tasks){
  tasks.results.forEach(function(task) {
    if (task.priority==4) {
    console.log(task)
    var $li = $('<li>');
    $li.text(task.title);
    $li.appendTo($4tasks);
  }
})
})




var $task = $('#1task');
var $title = $('input[name="title"]');
var $priority = $('input[name="priority"]');
var $status =  $('input[name="status"]');
var $description = $('input[name="description"]');


$task.submit(function() {
  console.log('you submitted the form');


  $.ajax({
    method: 'post',
    url: 'http://localhost:8000/api/tasks/',
    // username: 'david',
    // password: 'password123',
    data: {
      title: $title.val(),
      priority: $priority.val() ,
      status: $status.val(),
      description: $description.val()
    },
    success: function(newTask) {
      console.log(newTask)
      var $li = $('<li>');
      $li.text(newTask.title)
      $li.appendTo($tasks);
    }
  });


  var $task = $('#2task');
  var $title = $('input[name="title"]');
  var $priority = $('input[name="priority"]');
  var $status =  $('input[name="status"]');
  var $description = $('input[name="description"]');


  $task.submit(function() {
    console.log('you submitted the form');


    $.ajax({
      method: 'post',
      url: 'http://localhost:8000/api/tasks/',
      // username: 'david',
      // password: 'password123',
      data: {
        title: $title.val(),
        priority: $priority.val() ,
        status: $status.val(),
        description: $description.val()
      },
      success: function(newTask) {
        console.log(newTask)
        var $li = $('<li>');
        $li.text(newTask.title)
        $li.appendTo($tasks);
      }
    });

    var $task = $('#3task');
    var $title = $('input[name="title"]');
    var $priority = $('input[name="priority"]');
    var $status =  $('input[name="status"]');
    var $description = $('input[name="description"]');


    $task.submit(function() {
      console.log('you submitted the form');


      $.ajax({
        method: 'post',
        url: 'http://localhost:8000/api/tasks/',
        // username: 'david',
        // password: 'password123',
        data: {
          title: $title.val(),
          priority: $priority.val() ,
          status: $status.val(),
          description: $description.val()
        },
        success: function(newTask) {
          console.log(newTask)
          var $li = $('<li>');
          $li.text(newTask.title)
          $li.appendTo($tasks);
        }
      });

      var $task = $('#4task');
      var $title = $('input[name="title"]');
      var $priority = $('input[name="priority"]');
      var $status =  $('input[name="status"]');
      var $description = $('input[name="description"]');


      $task.submit(function() {
        console.log('you submitted the form');


        $.ajax({
          method: 'post',
          url: 'http://localhost:8000/api/tasks/',
          // username: 'david',
          // password: 'password123',
          data: {
            title: $title.val(),
            priority: $priority.val() ,
            status: $status.val(),
            description: $description.val()
          },
          success: function(newTask) {
            console.log(newTask)
            var $li = $('<li>');
            $li.text(newTask.title)
            $li.appendTo($tasks);
          }
        });

















  return false;
});
