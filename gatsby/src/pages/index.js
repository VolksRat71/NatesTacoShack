import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/HomePageStyles'
import LoadingGrid from '../components/LoadingGrid';

function WhoIsOn({ whoIsOn }) {
    return (
        <div>
            {!whoIsOn && <LoadingGrid count={4} />}
            {whoIsOn && !whoIsOn?.length && (
                <p>No one is working right now</p>
            )}
        </div>
    )
};

function DailySpecials({ dailySpecials }) {
    return (
        <div>
            {!dailySpecials && <LoadingGrid count={4} />}
            {dailySpecials && !dailySpecials?.length && (
                <p>NThere are no daily specials right now</p>
            )}
        </div>
    )
};

export default function HomePage() {
    const { whoIsOn, dailySpecials, location } = useLatestData();
    return (
        <div className="center">
            <h1>The Best Tacos in Austin, TX!</h1>
            <p>The {location} location is open 11am to 11pm every day</p>
            <HomePageGrid>
                <WhoIsOn whoIsOn={whoIsOn} />
                <DailySpecials dailySpecials={dailySpecials} />
            </HomePageGrid>
        </div>
    )
};