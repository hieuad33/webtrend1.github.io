setTimeout(function start ()
{
  
  $('.column').each(function(i)
  {  
    var $column = $(this);
    $(this).append('<span class="count"></span>')
    setTimeout(function()
    {
      $bar.css('height', $column.attr('data-percent'));      
    }, i*100);
  });

$('.count').each(function () 
{
    $(this).prop('Counter',0).animate(
    {
        Counter: $(this).parent('.column').attr('data-percent')
    }, 
    {
        duration: 2000,
        easing: 'swing',
        step: function (now) 
        {
            $(this).text(Math.ceil(now) +'%');
        }
    });
});

}, 500)
