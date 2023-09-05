import { Card, Metric, Text } from "@tremor/react";
import './CardSales.css'

function CardSales(props) {
  const {text,metric} = props
  return (
  <Card className="Card-Sales md:max-w-sm" decoration="top" decorationColor="blue">
    <Text>{text}</Text>
    <Metric>$ {metric}</Metric>
  </Card>
  )
};

export default CardSales;

