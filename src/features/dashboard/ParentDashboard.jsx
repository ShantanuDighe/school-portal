function ParentDashboard() {
  return (
    <div>
      <h3>Parent Dashboard</h3>

      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card shadow-sm p-3">
            <h6>Attendance</h6>
            <h4>92%</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-3">
            <h6>Pending Fees</h6>
            <h4>₹12,000</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentDashboard
