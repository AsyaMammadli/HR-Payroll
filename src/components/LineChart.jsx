import { Line } from "react-chartjs-2";

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Employee Contribution",
        data: [60, 30, 50, 30, 25, 50, 70],
        fill: true,
        backgroundColor: "rgba(151, 108, 0, 1), rgba(22, 24, 25, 1)",
        borderColor: "rgba(255, 255, 255, 1)",
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
