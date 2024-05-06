import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { getIndividualSpell } from '../api/spell';
import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const ViewIndividual = () => {
    const [myData, setMyData]=useState<any>(null)
    const params=useParams();
    const { isLoading, isSuccess, isError, data}=useQuery(['get-single-spell', params?.name], getIndividualSpell)
    

    useEffect(()=>{
        setMyData(data)
    },[data])
 console.log("this is my individual spell", myData)
    return (
  
  <Box p={10} sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
    <Typography variant="h4">
      {myData?.name}
    </Typography>
    {myData?.desc?.map((data:string, index:number)=>(
      <p key={index}>{data}</p>
    ))}
  </Box>
       
    )
}

export default ViewIndividual
