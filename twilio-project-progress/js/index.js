//SHOW TARGET CONTENT
jQuery(function(){
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
});

//ACTIVE STATE
 $('a.showSingle').click(function(e) {
        e.preventDefault();
        $('a.showSingle').removeClass('active');
        $(this).addClass('active');
    });