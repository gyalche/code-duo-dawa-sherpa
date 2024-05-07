import GradeIcon from '@mui/icons-material/Grade';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Box, Button, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState, useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useCustomDebounce } from '../../custom/debounce';
import { addSearch, setView } from '../../stores/spellSlice';
import MyModal from '../modal';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

const Header = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const params = useParams();
  const dispatch = useDispatch();
  const { listOfFavroite, view } = useSelector((state: any) => state?.spell);

  const debouncedValue = useCustomDebounce(search, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(addSearch(debouncedValue));
  }, [debouncedValue]);

  const viewSet = (data: boolean) => {
    dispatch(setView(data));
  };
  console.log('views', view);

  return (
    <div className="head">
      {open && (
        <MyModal data={listOfFavroite} open={open} handleClose={handleClose} />
      )}
      {params?.subname ? (
        <Box sx={{ width: '300px' }}></Box>
      ) : (
        <TextField
          className="search"
          type="text"
          placeholder="search... spells, features etc"
          onChange={handleSearchChange}
          value={search}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
      <Badge
        sx={{ cursor: 'pointer' }}
        badgeContent={listOfFavroite?.length}
        color="primary"
        onClick={handleOpen}>
        <GradeIcon
          color="action"
          style={{ color: listOfFavroite?.length ? 'red' : 'gray' }}
        />
      </Badge>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Button onClick={() => viewSet(true)} variant={view && 'contained'}>
          <ViewListIcon />
        </Button>
        <Button onClick={() => viewSet(false)} variant={!view && 'contained'}>
          <GridViewIcon />
        </Button>
      </Box>
    </div>
  );
};

export default Header;
