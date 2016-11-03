var custUri = 'http://localhost:38999/api/customer';


function callback(data) {
    console.log(data);
}

function findcustomer() {
    var id = $('#custID').val();

    $.ajax({
        url: custUri + '/' + id,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp', 
        jsonpCallback: 'callback',
        success: function (data) {
            $.each(data, function (key, item) {
                $('<li>' + '&emsp;<b>Customer ID:</b>' + item.CustId + '&emsp;<b>Customer Name:</b> ' + item.FirstName + ' ' + item.LastName + '</li>').appendTo($('#customer'));
            });
        },
        error: function (data, two, three) {
            alert("Error" + data + two + three);

        }
    });

}