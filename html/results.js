$('.btn').click(function() {
  
    $('.text').text('loading . . .');
    
    $.getJSON( "http://localhost:3002/survey", function( data ) {
        $('.text').text(JSON.stringify(data));
       console.log('json:' + JSON.stringify(data.survey));
    //    console.log('json:' + JSON.stringify(data.survey.graphs.keys))
      });
  });

