import React from 'react';
import '../../App.css';
import OfficerSection from '../OfficerSection'
import ContributorSection from '../ContributorSection'
import Footer from '../Footer';
import { Button } from '../Button';
import HorizonLine from '../HorizontalLine';


export default function Officers() {
  return (
  <div className="title2">
    <div class="officer-background">
        <h1></h1>
        <h1 style={{color: "aliceblue"}}>Officers & Contributors</h1> 
      </div>

    <center>
    <HorizonLine text="Officers" /> 
    </center>

    <center>
    <Button buttonStyle='btn--outline'>EDIT</Button>
    </center>
    
    {/* <h1 style={{marginTop : '30px', fontFamily : 'Trebuchet MS'}}>Officers</h1> */}
    <>
    <OfficerSection />
    </>


    <center>
    <HorizonLine text="Contributors" />
    </center>
    {/* <h1 style={{marginTop : '20px', fontFamily : 'Trebuchet MS', marginBottom : '30px'}}>Contributors</h1> */}
    <center>
    <img src='/images/worker.png' width = '60'/>
    </center>
    <>
    <ContributorSection />
    </>

    <>
    <Footer />
    </>

   

    </div>
  );
}


    
   
   
   

    

