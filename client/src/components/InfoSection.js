import React from 'react';
import '../App.css';
import { Button } from './Button';
import './InfoSection.css';
//import { Text, StyleSheet } from 'react-native';

function InfoSection() {
  return (
    <div className='info-container'>
      <h1>Promoting STEM for the general welfare of society</h1>
      <h2>In the areas of science, technology and entrepreneurship, we provide opportunities for:</h2>
      
      <div className='flexbox-container'>
        <div className='flexbox-item flexbox-item1'>
            <img src = '/images/one.png' style = {{width : '40px', height : '40px', borderRadius : '5px'}} class="rounded mx-auto d-block" />    
            <h3>International Cooperation</h3>
            <p3>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p3>
        </div>
        <div className='flexbox-item flexbox-item2'>
            <img src = '/images/one.png' style = {{width : '40px', height : '40px', borderRadius : '5px'}} class="rounded mx-auto d-block"/>
            <h3>Career Development</h3>
            <p3>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p3>
        </div>
        <div className='flexbox-item flexbox-item3'>
            <img src = '/images/one.png' style = {{width : '40px', height : '40px', borderRadius : '5px'}} class="rounded mx-auto d-block"/>
            <h3>Community Service</h3>
            <p3>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p3>
        </div>
        {/* <div className='axis main-axis'></div>
        <div className='axis cross-axis'></div> */}
      </div>
    
      <div className='flexbox-container2'>
        <div className='flexbox2-item flexbox-item1'>
        <img src = '/images/two.png' style = {{width : '150px', height : '150px', borderRadius : '5px'}} />
        </div>

        <div className='flexbox2-item flexbox-item2'>
        <h4>Vision</h4>
        <p4>The organization objectives are to</p4>
        <p4>Promote the application of science and technology for the general welfare of society</p4>
        <p4>Foster international cooperation especially between the U.S. and Korea</p4>
        <p4>Help Korean-American Scientists and Engineers develop their full career potential</p4>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;

/*import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section``
const Container = styled.div``
const ColumnLeft = styled.div``
const ColumnRight = styled.div``

const InfoSection = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <h1></h1>
                <p></p>
                <p></p>
                <Button to="/homes">label</Button>

                </ColumnLeft>
                <ColumnRight>
                    <img src="" alt="home" />
                </ColumnRight>
            </Container>
        </Section>
        
    );
};


export default InfoSection;
*/