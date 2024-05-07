import { useQuery } from 'react-query';
import { getSpell } from '../api/spell';
import { Box } from '@mui/material';
import { cardType } from '../@types/index';
import BasicCard from '../components/card';
import { Layout } from './Layout';
import SkeletionLoading from '../components/loading/skeletionLoading';
import { useSelector } from 'react-redux';
import { getSearchValue } from '../stores/spellSlice';
import { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
const HomePage = () => {
  const [myData, setMyData] = useState<any>(null);
  const { search } = useSelector(getSearchValue);

  const { data, isLoading, isSuccess, isError, refetch } = useQuery(
    ['get-spell', search],
    getSpell
  );

  useEffect(() => {
    setMyData(data);
  }, [isSuccess]);
  useEffect(() => {
    refetch();
    setMyData(data);
  }, [search]);

  console.log('this is my data', myData);

  return (
    <Layout>
      <div className="card-display">
        {myData?.response?.status === 404 ? (
          <p>No data found.. for {search}</p>
        ) : (
          <>
            {isLoading ? (
              // < sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <SkeletionLoading />
            ) : (
              // <>
              //   {myData?.results?.map((data: cardType, index: number) => (
              //     <Box sx={{ padding: '10px' }} key={data?.index}>
              //       <BasicCard data={data} />
              //     </Box>
              //   ))}
              // </>

              <List
                // innerElementType="ul"
                itemData={myData?.results || []}
                itemCount={myData?.results?.length || 0}
                itemKey={(index) => String(index)}
                itemSize={140} // Height of each row
                columnCount={1} // Display one column
                height={window.innerHeight - 100}
                width={500}
                overscanColumnCount={3} // Adjust the width as needed to fit within the parent container
              >
                {({ data, index, style }) => (
                  <div
                    key={data?.index}
                    style={{
                      ...style,
                      padding: '10px',
                      width: '100%',
                    }} // Adjust the width of each row
                  >
                    <BasicCard data={data[index]} />
                  </div>
                )}
              </List>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
