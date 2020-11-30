var chart = false;

function displaychart(){

var budget = budgetController.getBudget();

if(budget.budget){

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Expenses', 'Income'],
        datasets: [{
            data: [budget.totalExp,budget.totalInc],
            backgroundColor: ['#e91e63', '#00e676'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        aspectRatio:1,
        title: {
            display: true,
            text: 'Budget Pie Chart',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + 'n' + value + '%';
                }
            }
        }
    }
});

var x = (document.getElementById('myChart').style.display)
if(x==='none'){
    document.getElementById('myChart').style.display='block';
    return;
}

else if(x==='block'){
    document.getElementById('myChart').style.display='none';
    return;
}



}

else{
    document.getElementById('myChart').style.display='none';
}

chart = true;

}

function hideChart(){
    var budget = budgetController.getBudget();

if(budget.budget){

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Expenses', 'Income'],
        datasets: [{
            data: [budget.totalExp,budget.totalInc],
            backgroundColor: ['#e91e63', '#00e676'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        aspectRatio:1,
        title: {
            display: true,
            text: 'Budget Pie Chart',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + 'n' + value + '%';
                }
            }
        }
    }
});

var x = (document.getElementById('myChart').style.display)
if(x==='none'){
    document.getElementById('myChart').style.display='block';
    return;
}

else if(x==='block'){
    document.getElementById('myChart').style.display='none';
    return;
}



}

else{
    document.getElementById('myChart').style.display='none';
}

chart=false;

}

function toggleChart(){
    chart ? hideChart() : displaychart();
    
}

function updateChart(){
    var budget = budgetController.getBudget();

    if(budget.totalExp + budget.totalInc > 0){

    
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Expenses', 'Income'],
        datasets: [{
            data: [budget.totalExp,budget.totalInc],
            backgroundColor: ['#e91e63', '#00e676'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        aspectRatio:1,
        title: {
            display: true,
            text: 'Budget Pie Chart',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + 'n' + value + '%';
                }
            }
        }
    }
})

}

else{
    document.getElementById('myChart').style.display='none';

}

}

//myChart.data.datasets.data = [budget.totalExp,budget.totalInc]

// var show_hide_chart = function(){

//     x = document.getElementById('myChart').style.display;
//     console.log(x);

// }






