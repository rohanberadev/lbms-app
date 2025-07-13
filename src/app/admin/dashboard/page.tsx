import { ChartAreaLinear } from "~/components/AreaChartLinear";

export default function Dashboard() {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 p-8 justify-center items-center gap-8">
            <ChartAreaLinear />
            <ChartAreaLinear />
            <ChartAreaLinear />
            <ChartAreaLinear />
        </div>
    );
}
