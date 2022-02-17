import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Container } from "./style";

const options = {
    chart: {
        stacked: true,
      },
    grid: {
        show: true,
        borderColor: 'black'
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
      },
      colors: [ '#000000', 'rgb(216, 129, 71)'
    ],
    yaxis: {
        labels: {
            style: {
              width: '45px'
            },
          }
    },
    responsive: [{
      breakpoint: '768px',
      options: {'width': '300px'},
  }]
}


export default function BarChart({comAporte}){
  const series =[{
    name: 'Sem aporte',
    data: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  }, {
    name: 'Com Aporte',
    data: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  }]
    return (
        <Container>
        <Chart
        options = {options}
        series = {series}
        type = "bar"
        width = '100%'
        height = '350'
        />
        </Container>
    )
}