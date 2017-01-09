$(document).ready(function() {

    // process the form
    $('myform').submit(function(event) {
        alert();
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'firstName'              : $('input[name=firstName]').val(),
            'lastName'             : $('input[name=lastName]').val(),
            'userName'              : $('input[name=userName]').val(),
            'password'             : $('input[name=password]').val(),
            'phoneNo'              : $('input[name=phoneNo]').val(),
            'role'             : $('input[name=role]').val(),
            
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'http://35.163.132.184:8181/api/register', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 
                alert(data);

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});