import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 70vh;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  color: white;

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  p {
    max-width: 500px;
    margin-top: 1rem;
  }
`;

const Video = () => {
  return (
    <HeroContainer>
      <VideoBackground
        src="/video.mp4" // Video is now in the public folder
        autoPlay
        muted
        loop
      />
      <HeroContent>
        <h1>Farming as a Passione</h1>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius.
        </p>
      </HeroContent>
    </HeroContainer>
  );
};

export default Video;
