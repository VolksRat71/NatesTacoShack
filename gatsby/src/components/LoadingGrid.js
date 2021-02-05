import React from 'react';
import { ItemsGrid, SingleGridItem } from "../styles/HomePageStyles";

export default function ({ count }) {
    console.log("Hello");
    return (
        <ItemsGrid>
            {Array.from({ length: count }, (_, i) => (
                <SingleGridItem key={i}>
                    <p>
                        <span className="mark">Loading...</span>
                    </p>
                    <img
                        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
                        className="loading"
                        alt="Loading"
                        width="500"
                        height="400"
                    />
                </SingleGridItem>
            ))}
        </ItemsGrid>
    )
}