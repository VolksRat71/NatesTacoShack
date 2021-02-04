import { useEffect, useState } from 'react';

export default function useLatestData() {
    const [whoIsOn, setWhoIsOn] = useState([]);
    const [dailySpecials, setDailySpecials] = useState([]);
    const [location, setLocation] = useState('')

    useEffect(function () {
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                query {
                    StoreSettings(id: "downtown") {
                      name
                      chef {
                        name
                        slug {
                          current
                        }
                        image {
                          asset {
                            url
                          }
                        }
                      }
                      specials {
                        name
                        vegan
                        slug {
                          current
                        }
                        image {
                          asset {
                            url
                          }
                        }
                      }
                    }
                  }
                `
            })
        })
            .then(res => res.json())
            .then(({ data: { StoreSettings: { chef, specials, name } } }) => {
                setWhoIsOn(chef);
                setDailySpecials(specials);
                setLocation(name);
            })
    }, [])
    return {
        whoIsOn,
        dailySpecials,
        location
    }
}