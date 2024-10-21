// pages/Home.js
import React from 'react';
import Video from '../Components/Video';
import '../App.css';



const Home = () => {
  return (
    <div>

      <div className="background-image">
      </div>
      <div style={{
            backgroundColor: '#00505F',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'TT Ramillas, serif',
        }}>
            <h1>About Norman Nachle</h1>
            <p style={{ marginTop: '10px', fontSize: '16px' }}>
                Here is some filler information about Norman Nachle. You can add more details and content here.
            </p>
            <p style={{fontSize: '16px' }}> More filler info</p>
            <p style={{fontSize: '16px' }}> More filler info</p>
            <p style={{fontSize: '16px' }}> More filler info</p>
            <p style={{fontSize: '16px' }}> More filler info</p>
            <p style={{fontSize: '16px' }}> More filler info</p>
            
        </div>


       
   
    
    <div style={{ backgroundColor: '#C7A45E', color: 'white', padding: '20px', textAlign: 'center' }}>
    <img src="path/to/your/image.jpg" alt="Description" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
    
    <div>
        <strong style= {{fontWeight:600, fontSize: '2.4rem', fontFamily: 'TT Ramillas, serif'}}>Norman Nachle 2025
        </strong>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', fontFamily: 'Hatton, sans-serif' }}>
    <div style={{ margin: '0 6rem' }}> {/* Margin set to 2rem for spacing */}
        <strong style={{ fontSize: '1.563rem', fontFamily: 'TT Ramillas, serif', fontWeight: 400 }}>Location</strong>
        <p style={{ fontSize: '1rem', fontWeight: 100 }}>Norman, Oklahoma</p>
    </div>

    <div style={{ margin: '0 6rem' }}> {/* Margin set to 2rem for spacing */}
        <strong style={{ fontSize: '1.563rem', fontFamily: 'TT Ramillas, serif', fontWeight: 400 }}>Date</strong>
        <p style={{ fontSize: '1rem', fontWeight: 100 }}>February 1st 2025</p>
    </div>

    <div style={{ margin: '0 6rem' }}> {/* Margin set to 2rem for spacing */}
        <strong style={{ fontSize: '1.563rem', fontFamily: 'TT Ramillas, serif', fontWeight: 400 }}>Time</strong>
        <p style={{ fontSize: '1rem', fontWeight: 100 }}>TBD</p>
    </div>

    <div style={{ margin: '0 6rem' }}> {/* Margin set to 2rem for spacing */}
        <strong style={{ fontSize: '1.563rem', fontFamily: 'TT Ramillas, serif', fontWeight: 400 }}>Tickets</strong>
        <p style={{ fontSize: '1rem', fontWeight: 100 }}>Not Out Yet</p>
    </div>
</div>


</div>

    </div>
  );
};

export default Home;
