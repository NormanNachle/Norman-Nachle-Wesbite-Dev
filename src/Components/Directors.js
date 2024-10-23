import React from 'react';
import backgroundImage1 from '../Images/FromUrvi.NNBoard-17.jpg';
import backgroundImage2 from '../Images/FromUrvi.NNBoard-29.jpg';
import backgroundImage3 from '../Images/FromUrvi.NNBoard-03.jpg';

const Directors = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const DirectorNames = ["Aashish Allu", "Urvi Patil", "Nisha Basa"];

  const divStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#00505F' }}>
      <h1 style={{ margin: '55px 0 20px 0', color: 'white' }}>Meet Our Directors</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#00505F' }}>
        {images.map((image, index) => (
          <div key={index} style={{ ...divStyle, backgroundImage: `url(${image})`, flex: '1', margin: '0 10px' }}>
            <h1>{DirectorNames[index]}</h1>
          </div>
        ))}
      </div>
      <footer style={{ marginTop: '20px', fontSize: '1.2em', color: '#fff' }}>
        <p>For any questions, please contact us at: <a href="mailto:normannachle@gmail.com" style={{ color: '#007bff' }}>normannachle@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default Directors;
