import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
type backBut = {
  name: string;
  click?: () => void;
};
export const BackButton = ({ name }: backBut) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Button onClick={goBack}>
      <ArrowBackIcon />
      {name}
    </Button>
  );
};
