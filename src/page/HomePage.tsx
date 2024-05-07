import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import { getSpell } from '../api/spell';
import BasicCard from '../components/card';
import SkeletionLoading from '../components/loading/skeletionLoading';
import { getSearchValue, getView } from '../stores/spellSlice';
import { Layout } from './Layout';
import { Box } from '@mui/material';
const HomePage = () => {
  const [myData, setMyData] = useState<any>(null);

  const { search } = useSelector(getSearchValue);
  const view = useSelector(getView);

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
              <>
                {!view ? (
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {myData?.results?.map((data: cardType, index: number) => (
                      <Box sx={{ padding: '10px' }} key={data?.index}>
                        <BasicCard data={data} />
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <List
                    // innerElementType="ul"
                    itemData={myData?.results || []}
                    itemCount={myData?.results?.length || 0}
                    itemKey={(index) => String(index)}
                    itemSize={140}
                    columnCount={2}
                    height={window.innerHeight - 150}
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
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
