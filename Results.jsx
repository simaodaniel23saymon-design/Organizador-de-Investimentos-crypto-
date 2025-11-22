import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Results({ data }) {
  const labels = Array.from({ length: data.t + 1 }, (_, i) => i);
  const values = labels.map(i => data.P * Math.pow(1 + data.r, i));

  const chartData = {
    labels,
    datasets: [{ label: "Crescimento", data: values }]
  };

  return (
    <div className="bg-white/20 p-4 rounded-2xl shadow mb-6">
      <h2 className="text-2xl font-semibold mb-3">Resultados</h2>

      <p>Valor final: {data.final.toFixed(2)}</p>
      <p>Lucro: {data.profit.toFixed(2)}</p>

      <div className="bg-white p-2 rounded mt-4">
        <Line data={chartData} />
      </div>
    </div>
  );
}
