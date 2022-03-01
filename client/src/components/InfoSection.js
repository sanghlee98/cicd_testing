import React from 'react';
import '../App.css';
import { Button } from './Button';
import './InfoSection.css';
//import { Text, StyleSheet } from 'react-native';

function InfoSection() {
  return (
    <div className='info-container'>
      <h0>Korean-American Scientists and Engineers Association</h0>
      <p0>Howdy! We are Korean-American Scientists and Engineers Association (KSEA) at Texas A&M University. KSEA was established in 1971 as a non-profit professional organization and has grown to over 6,000 registered members with ~70 Local Chapter and Branches, ~30 Affiliated Professional Societies, and 13 Technical Groups across the United States.</p0>
      
      {<h1>Our Mission</h1>}
      <h2>In the areas of science, technology and entrepreneurship, we provide opportunities for:</h2>
      
      <div className='flexbox-container'>
        <div className='flexbox-item flexbox-item1'>
            <img src = '/images/globe2.svg' style = {{width : '60px', height : '100px', borderRadius : '5px', marginBottom : '20px'}} class="rounded mx-auto d-block" />    
            <h3>International</h3>
            <h3>Cooperation</h3>
            {/*<p3>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p3>*/}
        </div>
        <div className='flexbox-item flexbox-item2'>
            <img src = '/images/reception-4.svg' style = {{width : '60px', height : '100px', borderRadius : '5px', marginBottom : '20px'}} class="rounded mx-auto d-block"/>
            <h3>Career</h3>
            <h3>Development</h3>
        </div>
        <div className='flexbox-item flexbox-item3'>
            <img src = '/images/people.svg' style = {{width : '60px', height : '100px', borderRadius : '5px', marginBottom : '20px'}} class="rounded mx-auto d-block"/>
            <h3>Community</h3>
            <h3>Service</h3>
        </div>
        {/* <div className='axis main-axis'></div>
        <div className='axis cross-axis'></div> */}
      </div>

      {/*////////////////////////////////*/}
      {<h1>Our Mission</h1>}
      <h2>In the areas of science, technology and entrepreneurship, we provide opportunities for:</h2>
      
      <div className='flexbox-container'>
        <div className='flexbox-item flexbox-item1'>
            <img src = '/images/globe2.svg' style = {{width : '40px', height : '40px', borderRadius : '5px', marginBottom : '10px'}} class="rounded mx-auto d-block" />    
            <h3>International</h3>
            <h3>Cooperation</h3>
            <p3>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p3>
        </div>
        <div className='flexbox-item flexbox-item2'>
            <img src = '/images/reception-4.svg' style = {{width : '40px', height : '40px', borderRadius : '5px', marginBottom : '10px'}} class="rounded mx-auto d-block"/>
            <h3>Career</h3>
            <h3>Development</h3>
            <p3>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p3>
        </div>
        <div className='flexbox-item flexbox-item3'>
            <img src = '/images/people.svg' style = {{width : '40px', height : '40px', borderRadius : '5px', marginBottom : '10px'}} class="rounded mx-auto d-block"/>
            <h3>Community</h3>
            <h3>Service</h3>
            <p3>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p3>
        </div>
        {/* <div className='axis main-axis'></div>
        <div className='axis cross-axis'></div> */}
      </div>
      {/*////////////////////////////////*/}
    
      <div className='flexbox-container2'>
        <div className='flexbox2-item flexbox-item1'>
        <img src = '/images/signpost.svg' style = {{width : '180px', height : '180px', borderRadius : '5px'}} />
        </div>

        <div className='flexbox2-item flexbox-item2'>
        <h4>Our Vision</h4>
        <p4>The organization holds following objectives: </p4>

        <p4><br></br>● Promote the application of science and technology for the general welfare of society<br></br>● Foster international cooperation especially between the U.S. and Korea<br></br>● Help Korean-American Scientists and Engineers develop their full career potential</p4>
        
        </div>
      </div>

      <div className='flexbox-container2'>


        <div className='flexbox2-item flexbox-item2'>
        <h4>Become our member!</h4>
        <p4>KSEA membership benefits include but are not limited to: </p4>

        <p4><br></br>● Leadership development through committee activities and conference organization: KSEA has 13 Technical Groups and 14 Standing Committees for your participation. You are welcome to organize technical sessions at the annual U.S.-Korea Conference on Science, Technology, and Entrepreneurship (UKC) or you may organize a conference of your own.</p4>
        <p4><br></br>● Networking with other Korean-American scientists and engineers: Join the Technical Groups and Committees, or come to the annual conference, UKC. The KSEA is unique in that its members come from all fields of science and engineering. The UKC offers an excellent opportunity to learn about other fields than your own.</p4>
        <p4><br></br>● Office use at KSEA Office while in DC: If you need a temporary office while in DC, please come to the KSEA Headquarters office.</p4>
        <p4><br></br>● Participation in technical evaluation and consulting: We will contact you when we need experts for these services.</p4>
        <p4><br></br>● Opportunities for community service: You may participate in community service activities of your chapter. Or you may help with National Math Competition.</p4>
        <p4><br></br>● Information on professional opportunities in both U.S. and Korea: Look for job openings on the KSEA web.</p4>
        <p4><br></br>● Awards program: KSEA honors members of distinguished records by presenting them with KSEA Awards.</p4>
        <p4><br></br>● Membership dues supporting your chapter: Most of your dues go back to your own chapter.</p4>
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