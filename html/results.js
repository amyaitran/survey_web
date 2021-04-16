
  $('.btn').click(function() {
  
    $('.text').text('loading . . .');
    
    $.ajax({
        type:"GET",
      url:"http://localhost:3002/survey",
      success: function(data) {
          console.log('ok1-getlocal');
        $('.text').text(JSON.stringify(data));
      },
      dataType: 'json',
    });
    
  });

  $(document).ready(function(){
      console.log('ok2-docready')
    $.getJSON("http://localhost:3002/survey", function(data){
        console.log(data.survey); 
        console.log('ok3-getlocal')
    }).fail(function(){
        console.log("error");
    });
});

// var ctx = document.getElementById('canvas').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// console.log('ok it work');