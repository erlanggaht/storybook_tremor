import { Card, Title, LineChart } from "@tremor/react";
import dataFormatter from "./ChartData-formater";
import chartdata from "./ChartData";


function ChartLine () {
    return  (<Card>
    <Title>Export/Import Growth Rates (1970 to 2021)</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="year"
      categories={["Export Growth Rate", "Import Growth Rate"]}
      colors={["emerald", "gray"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
    )
};

export default ChartLine;
