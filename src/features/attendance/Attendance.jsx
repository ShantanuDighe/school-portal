function Attendance() {
  return (
    <div>
      <h3>Attendance</h3>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 Feb</td>
            <td className="text-success">Present</td>
          </tr>
          <tr>
            <td>11 Feb</td>
            <td className="text-danger">Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Attendance
