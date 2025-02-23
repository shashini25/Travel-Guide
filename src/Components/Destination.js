import React from 'react';
import "./DestinationStyle.css";
import DesData from './DesData';
import Sigiriya from '../Assets/3.jpg';
import Sigiriya2 from '../Assets/9.jpg';
import Arch1 from '../Assets/11.jpg';
import Arch2 from '../Assets/8.jpg';


export default function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you the opertunity to see a lot, within a time frame.</p>

            <DesData
                className="first-des"
                heading="Sigiriya"
                text="Sigiriya, also known as the Lion Rock, is a UNESCO World Heritage Site in Sri Lanka. 
       Built in the 5th century AD, it's an ancient rock fortress and palace standing 200 meters high. 
       Notable for its lion's paw entrance and vibrant Sigiriya Frescoes, the site offers breathtaking views from the summit. 
       A popular tourist destination, Sigiriya showcases ancient Sri Lankan architecture and artistry"

                img1={Sigiriya}
                img2={Sigiriya2}
            />

            <DesData
                className="first-des-reverse"
                heading="Nine-Arch"
                text="The Nine Arch Bridge in Ella, Sri Lanka, is a stunning brick railway bridge known for its unique construction without steel or reinforced concrete. 
       Spanning a lush gorge, the bridge features nine picturesque arches, offering travelers breathtaking views of the surrounding tea plantations and mist-covered hills. 
       A popular tourist attraction, the bridge is admired for its architectural beauty and scenic setting."

                img1={Arch1}
                img2={Arch2}
            />
        </div>
    )
}
