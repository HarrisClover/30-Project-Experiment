$(function() {
    $(".slider").slider({
        range: "min",
        value: 50,
        min: 0,
        max: 100,
        slide: function(event, ui) {
            var total = 0;
            $(".slider").not(this).each(function() {
                total += $(this).slider("value");
            });

            if (total + ui.value > 100) {
                return false;
            }
        }
    });
});
