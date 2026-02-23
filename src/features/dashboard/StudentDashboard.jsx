import React from "react";

function StudentDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎓 Student Dashboard</h1>
      <p>Welcome to the Student Portal.</p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>📚 My Courses</h3>
          <p>View enrolled subjects and materials.</p>
        </div>

        <div style={styles.card}>
          <h3>📝 Assignments</h3>
          <p>Check upcoming and completed assignments.</p>
        </div>

        <div style={styles.card}>
          <h3>📊 Results</h3>
          <p>View academic performance and grades.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default StudentDashboard;
