import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { cardType } from '../@types/index';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavroite } from '../stores/spellSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { FavSelectIcon, UnFavSelectIcon } from '../UI/IconButton/iconButton';
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
    navigate(`/${name}`);
  };

  const addToFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    name: string
  ) => {
    e.stopPropagation();
    setFav(!fav);
    dispatch(addFavroite(name));
  };

  //remove from favroite
  const removeFromFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    name: string
  ) => {
    e.stopPropagation();
  };

  return (
    <Card className="card" onClick={() => viewSingle(data?.index)}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">{data?.name}</Typography>
          {listOfFavroite?.includes(data?.index) ? (
            <FavSelectIcon
              onClick={(e) => removeFromFavroite(e, data?.index)}
            />
          ) : (
            <UnFavSelectIcon onClick={(e) => addToFavroite(e, data?.index)} />
          )}
        </Box>
        <Typography>Label {data?.level}</Typography>
      </CardContent>
    </Card>
  );
}
