import { Card, Title, DonutChart } from "@tremor/react";
import valueFormatter from "./Donut-formater";
import cities from "./DonutData";
import './DonutChart.css'

 function ChartDonut() {
  return (
    <Card className="ChartDonut-Card">
    <Title className="ChartDonut-Title ">Sales</Title>
    <DonutChart
      className="Donut"
      data={cities}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>
  )
}

export default ChartDonut;

