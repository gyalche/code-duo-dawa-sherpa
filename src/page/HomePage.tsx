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

const HomePage = () => {
  const [myData, setMyData] = useState<any>(null);
  const { search } = useSelector(getSearchValue);

  const { data, isLoading, isSuccess, isError, refetch } = useQuery(
    'get-spell',
    getSpell
  );

  useEffect(() => {
    setMyData(data);
  }, [isSuccess]);

  return (
    <Layout>
      <div className="card-display">
        {isLoading ? (
          // <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <SkeletionLoading />
        ) : (
          <>
            {myData?.results?.map((data: cardType, index: number) => (
              <Box sx={{ padding: '10px' }} key={data?.index}>
                <BasicCard data={data} />
              </Box>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
