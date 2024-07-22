// components/Card.js

export default function Card({ title, description }) {
    return (
      <div style={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '16px',
    },
  };
  
