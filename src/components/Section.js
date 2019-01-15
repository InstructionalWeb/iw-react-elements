import React from 'react';
import styled, { css } from 'styled-components';
import { Img } from './Img';
import { Box } from '@rebass/grid';

const Section = (props) => {
  return (
    <StyledSection as="section" image={props.sizes} bg={props.bg} layout={props.layout} bgAlign={props.bgAlign} {...props}>
      {props.sizes && <Img
        sizes={props.sizes}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          fontFamily: `"object-fit: cover; object-position: left center"`,
        }} />}

      {props.bg && <Img className="section__bg" src={props.bg} style={{
        fontFamily: `"object-fit: cover; object-position: left center"`,
        objectFit: 'cover',
        objectPosition: 'center',
      }} />}
      {props.children}
    </StyledSection>
  )
}

export default Section;

const StyledSection = styled(Box)`
  position: relative;
  padding: 0 0 1.5rem 0;
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  ${props => props.bg || props.image ? css`
    padding: 2rem 0; 
  ` : null
  }

  ${props => props.layout && props.layout.text_mode === 'light' && css`
    color: white;
    a {
      color: white;
      text-decoration: underline;
    }
  `}


  &:first-of-type {
    margin-top: 0;
  }

  ${props => props.layout && props.layout.background === 'Color' && css`
    background-color: ${props.layout.background_color};
  `}

  ${props => props.layout && props.layout.background === 'Image' && css`
    background-image: url(${props.layout.background_image.url});
    background-repeat: repeat;
    background-position: center center;
  `}

  .section__bg {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    object-position: left center;
    font-family: "object-fit: cover; object-position: center";
  }
`;