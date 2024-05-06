import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { cardType } from '../@types/index';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({data}:{data:cardType}) {

  const navigate=useNavigate()
  const viewSingle=(name:string)=>{
    navigate(`/${name}`)
  }

  const addToFavroite=(e:React.MouseEvent<SVGSVGElement, MouseEvent>)=>{
    e.stopPropagation()
  }

  return (
    <Card sx={{ minWidth: 300, cursor:'pointer', alignSelf:'flex-start' }} onClick={()=>viewSingle(data?.index)}>
      <CardContent>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography variant="h5">
              {data?.name}
            </Typography>
            <FavoriteBorderIcon onClick={(e)=>addToFavroite(e)} />
        </Box>
        <Typography>
      Label {data?.level}
        </Typography>
      </CardContent>
     
    </Card>
  );
}
