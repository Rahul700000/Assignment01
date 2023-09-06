console.log('file tested');
console.log(document.getElementById('btn'));


document.getElementById('btn').onclick = function(){
    console.log('Button clicked');
    console.log(document);
    console.log(document.getElementById('x1'));
    console.log(document.querySelectorAll('#x1'));


//Array Destructuring
var[text1,text2,text3]= document.querySelectorAll('#x1');
console.log(text1);
console.log(text1.value , typeof text1.value);
console.log(text2);
console.log(text3);

var phy  = Number(text1.value);
var chem  = Number(text2.value);
var math  = Number(text3.value);

var total = phy + chem + math;
console.log(total);

var perc = (total/300)*100;
console.log(perc);


var allP = document.getElementsByTagName("p");
console.log(allP);
var[p1,p2] = allP;

p1.innerHTML = ` Total : ${total}/300`;
p2.innerHTML = ` Percentage : ${perc}`;

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Marks Distribution'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'Subjects'
    },
    yAxis: {
        title: {
            text: 'Total Marks'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Subjects',
            colorByPoint: true,
            data: [
                {
                    name: 'Physics',
                    y: phy,
                    drilldown: 'Physics'
                },
                {
                    name: 'Chemistry',
                    y: chem,
                    drilldown: 'Chemistry'
                },{
                    name: 'Maths',
                    y: math,
                    drilldown: 'Maths'
                }
            ]
        }
    ],
   
});


}