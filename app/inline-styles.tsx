"use client";

export default function InlineStylesPage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold',
        color: '#060606',
        marginBottom: '1rem'
      }}>
        NorchAI - Your AI Skincare Partner
      </h1>
      
      <p style={{
        fontSize: '1.25rem',
        color: '#060606',
        marginBottom: '2rem'
      }}>
        Discover personalized skincare routines powered by advanced AI. Analyze your skin, track progress, and get tailored product recommendations.
      </p>
      
      <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
        <a href="#" style={{
          backgroundColor: '#ff3c41',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.375rem',
          fontWeight: 500,
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          Join Waitlist
        </a>
        
        <a href="#" style={{
          border: '1px solid #ff3c41',
          color: '#ff3c41',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.375rem',
          fontWeight: 500,
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          Learn More
        </a>
      </div>
      
      <div style={{
        marginTop: '4rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Features
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>AI Skin Analysis</h3>
            <p>Upload selfies for AI analysis that identifies specific skin concerns like hyperpigmentation, acne, and fine lines.</p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>Personalized Routines</h3>
            <p>Get custom skincare routines based on your unique skin profile, concerns, and goals.</p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>Progress Tracking</h3>
            <p>Track your skin's improvement over time with visual comparisons and data-driven insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 