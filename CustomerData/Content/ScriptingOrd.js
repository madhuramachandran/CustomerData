
var uri = 'http://localhost:38999/api/order';

function callback(data) {
    console.log(data);
}

function findorder() {
    var id = $('#ordID').val();

    $.ajax({
        url: uri + '/' + id,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp', 
        jsonpCallback: 'callback',
        success: function (data) {
            $.each(data, function (key, item) {
                $('<li>' + '<b>Order ID:</b> ' + item.OrderId + '&emsp;<b>Customer ID:</b>' + item.CustId + '&emsp;<b>Customer Name:</b> ' + item.FirstName + ' ' + item.LastName + '&emsp;&emsp;&emsp;<b>Order Amount:</b>' + item.OrderTotal + '&emsp;&emsp;<b>Ordered Date:</b>' + item.orderDate + '</li>').appendTo($('#order'));
            });
        },
        error: function (data, two, three) {
            alert("Error" + data + two + three);
        }
    });
}