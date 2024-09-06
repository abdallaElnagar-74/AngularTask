import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  option :any = {
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '50%']
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 0,
          lt: 100,
          color: 'rgba(0, 0, 180, 0.4)'
        }
      ]
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#8A74F9',
          width: 4
        },
        markPoint:{
          data:[
            {type:"max",name:'Maximum'}
          ]
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: []
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(138, 116, 249, 0)' // 0% opacity
              },
              {
                offset: 0.2637, // 26.37% opacity
                color: 'rgba(138, 116, 249, 0.2637)'
              },
              {
                offset: 1,
                color: 'rgba(138, 116, 249, 1)' // 100% opacity
              }
            ]
          }
        },
        data: [
          ['ديسمبر', 200],
          ['نوفمبر', 560],
          ['اكتوبر', 750],
          ['سبتمبر', 580],
          ['اغسطس', 250],
          ['يوليو', 300],
          ['يونيو', 450],
          ['مايو', 300],
          ['ابريل', 100],
          ['مارس', 180],
          ['فبراير', 250],
          ['يناير', 100],
        ]
      }
    ]
  };
  
  
}
