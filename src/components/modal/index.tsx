import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { cardType } from '../../@types';
import BasicCard from '../card';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  border: 'none',
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'no-wrap',
  flexDirection: 'column',
  overflowY: 'auto',
};
type modalProps = {
  data?: any;
  open: boolean;
  handleClose: () => void;
};
export default function MyModal({
  data,
  open,

  handleClose,
}: modalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data?.length
              ? 'Your favroites list.'
              : 'No favroite list added yet!'}
          </Typography>
          <Box className="modal-class">
            {data?.map((data: cardType, index: number) => (
              <Box
                sx={{ padding: '10px', minWidth: '300px' }}
                key={data?.index}>
                <BasicCard data={data} />
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
