import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/HomePageStyles'
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';

function WhoIsOn({ whoIsOn }) {
    return (
        <div>
            <h2 className="center">
                <span className="mark">
                    Chefs in the Kitchen Today
                </span>
            </h2>
            <p>Good eats by these good people</p>
            {!whoIsOn && <LoadingGrid count={4} />}
            {whoIsOn && !whoIsOn?.length && (
                <p>No one is working right now</p>
            )}
            {whoIsOn?.length && <ItemGrid items={whoIsOn} />}
        </div>
    )
};

function DailySpecials({ dailySpecials }) {
    return (
        <div>
            <h2 className="center">
                <span className="mark">
                    Daily Hot Deals!
                </span>
            </h2>
            <p>Today's featured Tacos</p>
            {!dailySpecials && <LoadingGrid count={4} />}
            {dailySpecials && !dailySpecials?.length && (
                <p>There are no daily specials right now</p>
            )}
            {dailySpecials?.length && <ItemGrid items={dailySpecials} itemType="special" />}
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