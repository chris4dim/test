google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {
  
  // BEGIN BAR CHART
  /*
  // create zero data so the bars will 'grow'
  var barZeroData = google.visualization.arrayToDataTable([
    ['Day', 'Page Views', 'Unique Views'],
    ['Sun',  0,      0],
    ['Mon',  0,      0],
    ['Tue',  0,      0],
    ['Wed',  0,      0],
    ['Thu',  0,      0],
    ['Fri',  0,      0],
    ['Sat',  0,      0]
  ]);
	*/
  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ['Έτος', 'Χημικά & Νοσοκομειακά', 'Λάσπη'],
    ['2004',  471779,      116678],
    ['2006',  348908,      139964],
    ['2008',  171796,      158732],
    ['2010',  202070,      117789],
    ['2012',  174524,      109274],
    ['2014',  187232,      138038] 
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
    fontName: 'Open Sans',
    chartArea: {
      left: 80,
      right: 40,
      top: 10,
      width: '100%',
      height: '70%'
    },
    bar: {
      groupWidth: '80%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 500000,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 6
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
			startup: true
    }
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);
  
 
  // Pie Chart 
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "Apoblhta": "Χημικά & Νοσοκομειακά",
    "tn": 187232
  }, {
    "Apoblhta": "Ανακυκλώσιμα",
    "tn": 2012754
  }, {
    "Apoblhta": "Αστικά Στερεά",
    "tn": 5477424
  }, {
    "Apoblhta": "Λάσπες",
    "tn": 138038
  }, {
    "Apoblhta": "Εξορυκτικές & Λοιπές Δραστηριότητες",
    "tn": 61943420
  } ],
  "valueField": "tn",
  "titleField": "Apoblhta",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );
  
  // pie chart data
  var pieData = google.visualization.arrayToDataTable([
    ['Στερεά Απόβλητα', ' Έτος 2004'],
    ['Χημικά & Νοσοκομειακά',      471779],
    ['Ανακυκλώσιμα',   1701596],
    ['Αστικά Στερεά',   5074791],
    ['Λάσπη',    116678],
    ['Εξορυκτιών & Λοιπών δραστηριοτήτων',  25981949]
  ]);
  // pie chart options
  var pieOptions = {
    backgroundColor: '#2ef2b4',
    pieHole: 0.4,
    colors: [ "cornflowerblue", 
              "olivedrab", 
              "orange", 
              "tomato", 
              "crimson", 
              "purple", 
              "turquoise", 
              "forestgreen", 
              "navy", 
              "gray"],
    pieSliceText: 'value',
    tooltip: {
      text: 'percentage'
    },
    fontName: 'Open Sans',
    chartArea: {
      width: '100%',
      height: '85%'
    },
    legend: {
      textStyle: {
        fontSize: 9
      }
    }
  };
  // draw pie chart
  var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
  pieChart.draw(pieData, pieOptions);
}