import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/HomePageStyles'
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';

function DailySpecials({ dailySpecials }) {
    return (
        <div>
            <h2 className="center">
                <span className="mark">
                    Daily Hot Deals!
                </span>
            </h2>
            <p>Today's featured Tacos</p>
            {dailySpecials.length === 0 ?
                <LoadingGrid count={4} /> :
                <ItemGrid items={dailySpecials} itemType="special" />}
        </div>
    )
};

function WhoIsOn({ whoIsOn }) {
    return (
        <div>
            <h2 className="center">
                <span className="mark">
                    Chefs for Today
                </span>
            </h2>
            <p>Good eats by good people</p>
            {whoIsOn.length === 0 ?
                <LoadingGrid count={4} /> :
                <ItemGrid items={whoIsOn} />}
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
                <DailySpecials dailySpecials={dailySpecials} />
                <WhoIsOn whoIsOn={whoIsOn} />
            </HomePageGrid>
        </div>
    )
};