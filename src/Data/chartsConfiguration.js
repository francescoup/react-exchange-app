export const lineConfiguration = {
  scales: {
    x: {
      labels: false,
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        display: false,
        color: "#f1f5f9",
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#ffffff",
      },
      beginAtZero: false,
    },
  },
  labels: {
    display: false,
  },
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      usePointStyle: true,
      titleColor: "#6b7280",
      backgroundColor: "white",
      bodyColor: "#6b7280",
      borderColor: "#f8fafc",
      borderWidth: 1,
      padding: 16,
    },
    title: {
      display: false,
      align: "start",
      color: "#f1f5f9",
      padding: {
        top: 6,
        bottom: 20,
      },
      font: {
        size: 16,
        family: "roboto",
        weight: 400,
      },
      text: "Nuovi Casi test",
    },
    legend: {
      display: false,
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
  },
};
