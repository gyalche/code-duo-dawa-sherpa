import { Badge } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';

const Header = () => {
  return (
     <div className='head'>
                <input type='text' placeholder="search spell" />
                 <Badge badgeContent={4} color="primary">
                    <GradeIcon color="action" />
                </Badge>
            </div>
  )
}

export default Header
