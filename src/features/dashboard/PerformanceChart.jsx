import { Line } from 'react-chartjs-2'

function PerformanceChart() {
  const data = {
    labels: ['Term 1', 'Term 2', 'Term 3'],
    datasets: [{
      label: 'Marks %',
      data: [75, 82, 90],
      borderColor: 'blue'
    }]
  }

  return <Line data={data} />
}

export default PerformanceChart
