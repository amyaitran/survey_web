$.getJSON("http://localhost:3002/survey", function (data) {
    $('.text').text(JSON.stringify(data));
    console.log('json:' + JSON.stringify(data.survey));
    var answers = data.survey.graphs[0].keys;
    var votes = data.survey.graphs[0].values;
    var question = data.survey.graphs[0].title;
    var ctx = document.getElementById('chart').getContext('2d');

    var mainContainer = document.getElementById("answersData")
    for (var i = 0; i < answers.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = answers[i];
        mainContainer.appendChild(div)
    }


    Chart.defaults.font.size = 30;
    Chart.defaults.layout.padding = 20;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: answers,
            datasets: [{
                label: '# of Votes',
                data: votes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20
                        }
                    }
                }
            }
        }
    })
    function typeError(answers) {
        if (undefined == 0) {
            return 0
        }
    }

    // document.getElementById("answersData").innerHTML = answers;
    // function displayAnswers(answers) {
    //     var mainContainer = document.getElementById("answersData")
    //     for (var i = 0; i < answers.length; i++) {
    //         var div = document.createElement("div");
    //         div.innerHTML = 'Answer: ' + answers[i];
    //         mainContainer.appendChild(div)
    //     }
    // };

    document.getElementById("questionData").innerHTML = question;
})

    .fail(function () {
        console.log('failed')
    })

