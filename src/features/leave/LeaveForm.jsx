function LeaveForm() {
  return (
    <div className="card">
      <h3>Apply Leave</h3>
      <input type="date" />
      <textarea placeholder="Reason..." />
      <button>Submit Leave</button>
    </div>
  );
}

export default LeaveForm;
