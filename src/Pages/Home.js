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


       
   
    
    <div style={{ backgroundColor: '#C7A45E', color: 'black', padding: '20px', textAlign: 'center' }}>
    <img src="path/to/your/image.jpg" alt="Description" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
    
    
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ margin: '0 15px' }}>
            <strong>Title 1</strong>
            <p>Description 1</p>
        </div>
        <div style={{ margin: '0 15px' }}>
            <strong>Title 2</strong>
            <p>Description 2</p>
        </div>
        <div style={{ margin: '0 15px' }}>
            <strong>Title 3</strong>
            <p>Description 3</p>
        </div>
        <div style={{ margin: '0 15px' }}>
            <strong>Title 4</strong>
            <p>Description 4</p>
        </div>
   
</div>

</div>

    </div>
  );
};

export default Home;
