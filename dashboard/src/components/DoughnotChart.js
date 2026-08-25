import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnotChart({ data }) {
  return (
    <div style={{ width: "400px", height: "400px", margin: "20px auto" }}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
          cutout: "65%",
        }}
      />
    </div>
  );
}
