import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Davin 20%", "Amalia 21%", "Sakanti 22%", "Ria 21%"],

    datasets: [
      {
        backgroundColor: [
          "rgba(13, 37, 53, 1)",
          "rgba(83, 136, 216, 1)",
          "rgba(244, 190, 55, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        data: [50, 50, 52, 52],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom", // This moves the y-axis labels to the bottom
      },
    },
    scales: {
      x: {
        display: false, // Removes the X-axis
      },
      y: {
        display: false, // Removes the Y-axis
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
