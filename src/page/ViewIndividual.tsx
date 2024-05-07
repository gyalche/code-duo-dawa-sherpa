import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BackButton } from '../UI/Buttons';
import { FavSelectIcon, UnFavSelectIcon } from '../UI/IconButton/iconButton';
import { getIndividualSpell } from '../api/spell';
import { addToFavroite, removeFavroite } from '../utils';
import { Layout } from './Layout';

const ViewIndividual = () => {
  const [myData, setMyData] = useState<any>(null);
  const [fav, setFav] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, data } = useQuery(
    ['get-single-spell', params?.mainname, params?.subname],
    getIndividualSpell
  );

  const { listOfFavroite } = useSelector((state: any) => state?.spell);
  const favIndex = Array.from(
    new Set(listOfFavroite?.map((data: string) => data?.index))
  );
  useEffect(() => {
    setMyData(data);
  }, [data]);

  return (
    <Layout>
      <Box
        p={10}
        sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Box>
          <BackButton name="back" />
        </Box>
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Typography variant="h4">{myData?.name}</Typography>
          <>
            {favIndex?.includes(data?.index) ? (
              <FavSelectIcon
                onClick={(e) => removeFavroite(e, data?.index, dispatch)}
              />
            ) : (
              <UnFavSelectIcon
                onClick={(e) => addToFavroite(e, data, dispatch, setFav, fav)}
              />
            )}
          </>
        </Box>
        {myData?.desc?.map((data: string, index: number) => (
          <p style={{ textAlign: 'justify' }} key={index}>
            {data}
          </p>
        ))}
      </Box>
    </Layout>
  );
};

export default ViewIndividual;
