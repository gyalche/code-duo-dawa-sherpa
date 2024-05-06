import { Badge } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';
import { useSelector } from 'react-redux';

const Header = () => {
  const {listOfFavroite}=useSelector((state:any)=>state?.spell)
  return (
     <div className='head'>
                <input type='text' placeholder="search spell" />
                 <Badge badgeContent={listOfFavroite?.length} color="primary">
                    <GradeIcon color="action" />
                </Badge>
            </div>
  )
}

export default Header
