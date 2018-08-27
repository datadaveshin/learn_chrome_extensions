$(function(){

    chrome.storage.sync.get('total', function(budget){
        $('#total').text(budget.total);
    });

    $('#spend-amount').click(function(){
        chrome.storage.sync.get('total', function(budget){
            var newTotal = 0;
            if (budget.total) {
                newTotal += parseInt(budget.total); // Use parseInt to make an integer
            }

            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal});

            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });

    $('#clear').click(function(){
        chrome.storage.sync.set({'total': 0});
        $('#total').text(0);
    })
});
