import React from 'react';
import useLatestData from '../utils/useLatestData';

function WhoIsOn({ whoIsOn }) {
    console.log(whoIsOn)
    return (
        <div>
            <p>WhoIsOn</p>
        </div>
    )
};

function DailySpecials({ dailySpecials }) {
    console.log(dailySpecials)
    return (
        <div>
            <p>DailySpecials</p>
        </div>
    )
};

export default function HomePage() {
    const { whoIsOn, dailySpecials, location } = useLatestData();
    return (
        <div className="center">
            <h1>The Best Tacos Austin, TX!</h1>
            <p>The {location} location is open 11am to 11pm every day</p>
            <div>
                <WhoIsOn whoIsOn={whoIsOn} />
                <DailySpecials dailySpecials={dailySpecials} />
            </div>
        </div>
    )
};