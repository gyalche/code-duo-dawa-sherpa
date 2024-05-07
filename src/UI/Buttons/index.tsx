import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
type backBut = {
  name: string;
  click: () => void;
};
export const BackButton = ({ name, click }: backBut) => {
  return (
    <Button onClick={click}>
      <ArrowBackIcon />
      {name}
    </Button>
  );
};
