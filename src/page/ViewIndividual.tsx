import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getIndividualSpell } from '../api/spell';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { FavSelectIcon, UnFavSelectIcon } from '../UI/IconButton/iconButton';
import { addToFavroite, removeFromFavroite } from '../utils';
import { BackButton } from '../UI/Buttons';

const ViewIndividual = () => {
  const [myData, setMyData] = useState<any>(null);
  const [fav, setFav] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('this is params', params);
  const { isLoading, isSuccess, isError, data } = useQuery(
    ['get-single-spell', params?.mainname, params?.subname],
    getIndividualSpell
  );

  const { listOfFavroite } = useSelector((state: any) => state?.spell);

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
            {listOfFavroite?.includes(data?.index) ? (
              <FavSelectIcon
                onClick={(e) => removeFromFavroite(e, data?.index, dispatch)}
              />
            ) : (
              <UnFavSelectIcon
                onClick={(e) =>
                  addToFavroite(e, data?.index, dispatch, setFav, fav)
                }
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
