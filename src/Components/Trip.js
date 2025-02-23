import "./TripStyle.css";
import React from 'react';
import Tripdata from "./Tripdata";
import Trip1 from "../Assets/lotus.jpg"
import Trip2 from "../Assets/meemure.jpg"
import Trip3 from "../Assets/riverston.jpg"

export default function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can descover blah blah blha</p>
            <div className="tripcard">
                <Tripdata
                    image={Trip1}
                    heading="Trip to Lotus Tower"
                    text="Lotus Tower, located in Colombo, Sri Lanka, is an iconic telecommunications and observation tower. Standing at 356 meters, it is the tallest structure in South Asia. 
            Shaped like a blooming lotus flower, the tower serves as a symbol of technological advancement and architectural elegance. 
            Visitors can enjoy panoramic views of the city from the observation deck, making it a significant landmark in Colombo."
                />

                <Tripdata
                    image={Trip2}
                    heading="Trip to Meemure "
                    text="Meemure is a remote and picturesque village hidden in the Knuckles Mountain Range. 
                    Accessible by challenging routes, Meemure is known for its pristine natural beauty, traditional way of life, and cultural richness. 
                    Surrounded by dense forests and cascading waterfalls, the village offers an authentic experience of rural Sri Lankan life. Visitors can explore nature trails, interact with the friendly villagers, and enjoy the tranquility of this off-the-beaten-path destination."
                />

                <Tripdata
                    image={Trip3}
                    heading="Trip to Riverston"
                    text="Riverston is a scenic area nestled in the Knuckles Mountain Range, offering breathtaking landscapes and lush greenery. 
                    Popular for its mist-covered hills, picturesque valleys, and diverse flora and fauna, Riverston is a favorite destination for nature lovers and hikers. 
                    The Mini World's End viewpoint provides stunning views of the surrounding mountains and terraced tea plantations, making it a serene retreat in the heart of Sri Lanka."
                />
            </div>
        </div>
    )
}
