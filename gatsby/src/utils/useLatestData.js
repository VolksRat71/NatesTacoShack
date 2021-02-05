import { useEffect, useState } from 'react';
// This is for the VS code formatter, it doesn't change code behavior
const gql = String.raw
const reqVars = gql`
  _id
  name
  slug {
    current
  }
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`;

export default function useLatestData() {
  const [whoIsOn, setWhoIsOn] = useState([]);
  const [dailySpecials, setDailySpecials] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: gql`

        query {
          StoreSettings(id: "downtown") {
            name
            chef {
              ${reqVars}
            }
            specials {
              ${reqVars}
              vegan
            }
          }
        }
                `
      })
    })
      .then(res => res.json())
      .then(({ data: { StoreSettings: { chef, name, specials } } }) => {
        setWhoIsOn(chef);
        setDailySpecials(specials);
        setLocation(name);
      })
      .catch((err) => console.log(err))
  }, [])
  return {
    whoIsOn,
    dailySpecials,
    location
  }
}