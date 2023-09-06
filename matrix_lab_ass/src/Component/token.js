import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Singledetail from './Singledetail';

function Token() {
  // State to store token data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch token data from the API
    fetch(`https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`)
      .then((res) => res.json())
      .then((res) =>
        setData(
          res?.pairs.sort((a, b) => Number(a.priceUsd) - Number(b.priceUsd))
        )
      );
  }, []);

  // Style for the heading
  const headingStyle = {
    color: 'var(--Cultured-Grey, #F7F9F9)',
    fontFamily: 'Work Sans',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '28px',
  };

  return (
    <Box>
      {/* Heading */}
      <Heading style={headingStyle}>Token Search Results</Heading>

      {/* Token data grid */}
      <SimpleGrid gap="10" columns={[1, 2, 3, 4]}>
        {data &&
          data.map((el) => (
            // Render the Singledetail component with token data
            <Singledetail key={el.id} props={el} />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default Token;
