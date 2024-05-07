import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cardType } from '../@types/index';
import { FavSelectIcon, UnFavSelectIcon } from '../UI/IconButton/iconButton';
import { addFavroite, removeFromFavroite } from '../stores/spellSlice';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function BasicCard({ data }: { data: cardType }) {
  const [fav, setFav] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listOfFavroite } = useSelector((state: any) => state?.spell);
  const viewSingle = (name: string) => {
    const mainame = name?.split('/')[2];
    const subname = name?.split('/')[3];
    navigate(`/${mainame}/${subname}`);
  };

  const addToFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    data: any
  ) => {
    e.stopPropagation();
    setFav(!fav);
    dispatch(addFavroite(data));
  };

  //remove from favroite
  const removeFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    index: any
  ) => {
    e.stopPropagation();
    // dispatch(clearFavroite());
    dispatch(removeFromFavroite(index));
  };

  const favIndex = Array.from(
    new Set(listOfFavroite?.map((data: string) => data?.index))
  );

  return (
    <Card className="card" onClick={() => viewSingle(data?.url)}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">{data?.name}</Typography>
          {favIndex?.includes(data?.index) ? (
            <>
              <FavSelectIcon onClick={(e) => removeFavroite(e, data?.index)} />
            </>
          ) : (
            <UnFavSelectIcon onClick={(e) => addToFavroite(e, data)} />
          )}
        </Box>
        <Typography>Label {data?.level}</Typography>
      </CardContent>
    </Card>
  );
}
