$(document).ready(function () {
    console.log('it works!!!');

    $('.searchBtn').on('click', function (e) {
        displayApiResultsOnDom();
        e.preventDefault();
    });


    function displayApiResultsOnDom() {
        var resultElement = '';

        $.ajax({
            type: "GET",
            url: "https://api.yelp.com/v3/businesses/search",
            dataType: 'json'
        })
    }
});
