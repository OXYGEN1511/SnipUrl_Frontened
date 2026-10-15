import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import { useStoreContext } from "../../contextApi/ContextApi";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);

const Graph = ({ graphData = [] }) => {
  const { isDark } = useStoreContext();

  const hasData = Array.isArray(graphData) && graphData.length > 0;
  const labels = hasData
    ? graphData.map((item) => `${item.clickDate}`)
    : ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  const counts = hasData
    ? graphData.map((item) => item.count)
    : [2, 5, 8, 4, 9, 12, 7];

  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(226, 232, 240, 0.6)";
  const tickColor = isDark ? "#94a3b8" : "#64748b";
  const titleColor = isDark ? "#94a3b8" : "#475569";

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Clicks",
        data: counts,
        backgroundColor: hasData
          ? "rgba(0, 102, 255, 0.85)"
          : isDark ? "rgba(51, 65, 85, 0.5)" : "rgba(203, 213, 225, 0.4)",
        hoverBackgroundColor: hasData
          ? "rgba(0, 82, 204, 1)"
          : isDark ? "rgba(71, 85, 105, 0.7)" : "rgba(203, 213, 225, 0.6)",
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 24,
        maxBarThickness: 32,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDark ? "#1e293b" : "#0f172a",
        titleFont: { family: "Inter", size: 12, weight: "600" },
        bodyFont: { family: "Inter", size: 12 },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context) => ` ${context.parsed.y} clicks`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: gridColor,
          drawBorder: false,
        },
        ticks: {
          color: tickColor,
          font: { family: "Inter", size: 11 },
          callback: function (value) {
            if (Number.isInteger(value)) {
              return value.toString();
            }
            return "";
          },
        },
        title: {
          display: true,
          text: "Total Engagements",
          color: titleColor,
          font: { family: "Inter", size: 12, weight: "600" },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: tickColor,
          font: { family: "Inter", size: 11 },
          maxRotation: 45,
          minRotation: 0,
        },
        title: {
          display: true,
          text: "Date",
          color: titleColor,
          font: { family: "Inter", size: 12, weight: "600" },
        },
      },
    },
  };

  return <Bar className="w-full" data={data} options={options} />;
};

export default Graph;