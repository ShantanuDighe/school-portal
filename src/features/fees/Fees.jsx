function Fees() {
  return (
    <div>
      <h3>Fee Overview</h3>

      <div className="card p-4 shadow-sm">
        <p>Total: ₹50,000</p>
        <p>Paid: ₹38,000</p>
        <p>Pending: ₹12,000</p>

        <button className="btn btn-success mt-3">
          Pay Now
        </button>
      </div>
    </div>
  )
}

export default Fees
