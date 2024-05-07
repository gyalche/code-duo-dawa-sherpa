import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const FavSelectIcon = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <FavoriteIcon sx={{ color: 'red' }} />
  </IconButton>
);
export const UnFavSelectIcon = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <FavoriteBorderIcon />
  </IconButton>
);
