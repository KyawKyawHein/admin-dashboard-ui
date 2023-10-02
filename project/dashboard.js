//for bar chart
Chart.defaults.global.legend.labels.usePointStyle = true;
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11],
    datasets: [{
    label: 'Order Count',
    data: [10,12,15,9,10,13,10,12,6,11,15],
    backgroundColor: 'rgba(137, 196, 244, 1)',
    borderColor: 'rgba(30, 139, 195, 1)',
    borderWidth: 1,
    lineTension:0,
},
    {
        label: 'Viewer Count',
        data: [25,34,28,41,55,35,43,28,57,25,40],
        backgroundColor: 'rgba(200, 247, 197, 1)',
        borderColor: 'rgba(0, 230, 64, 1)',
        borderWidth: 1,
        lineTension:0,
    },]
},
    options: {
    scales: {
    y: {
    beginAtZero: true,
    },
    xAxes:[{
        display : false,
    }],
    yAxes:[{
        display : false,
        ticks : {
            min : 0,
            max : 100,
        }
    }],
    // labels: {
    //     usePointStyle : true,
    // }
}
},
});
//for slick
$('.item-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

//for pie chart
let chart = document.getElementById('doughnut').getContext('2d');
let mine = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: ['YGN', 'NPT', 'SHAN', 'MON', 'AYEYARWADDY'],
        datasets: [{
            label: 'Order',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend : {
            position : 'bottom',
        }
    }
});

//for table row
