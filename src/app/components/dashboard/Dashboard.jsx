import CardSales from "../card-sales/CardSales";
import ChartDonut from "../donut-chart/DonutChart";
import ChartLine from "../line-chart/LineChart";
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="Dashboard">
      <section className="Area-1 Card-Sales">
        <CardSales text="Sales" metric={34.743} />
        <CardSales text="Sales" metric={73.233} />
        <CardSales text="Sales" metric={23.453} />
        <CardSales text="Sales" metric={54.243} />
      </section>

      <section className="Area-2">
        <div className="Line-Chart ">
          <ChartLine />
        </div>

        <div className="Chart-Donut">
          <ChartDonut />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
