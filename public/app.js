$(document).ready(function () {
    //    console.log('it works!!!');

    $('.searchBtn').on('click', function (e) {
        e.preventDefault();
        var userInput = getYelpData($('.searchQuery').val());
        //        getYelpData($('.location').val());

        //        var userInput = $('.searchQuery').val();
    });


    function getYelpData(userInput) {

        var yelpData = {
            url: 'http://api.yelp.com/v3/businesses/search' + userInput,
            dataType: ' json',
            data: {
                part: '',
                key: 'yHRcIf6jzZ3QvcS88zHrwg',
                q: userInput,
            },
            success: function (data) {
                console.log(data);
            }
        }
        $.ajax(yelpData);

    };


});
