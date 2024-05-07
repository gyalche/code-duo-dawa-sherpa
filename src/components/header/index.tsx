import { Badge, Box, InputAdornment, TextField } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useTransition } from 'react';
import { useCustomDebounce } from '../../custom/debounce';
import { addSearch } from '../../stores/spellSlice';
import SearchIcon from '@mui/icons-material/Search';
import { useParams } from 'react-router-dom';
import MyModal from '../modal';
const Header = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const dispatch = useDispatch();
  const { listOfFavroite } = useSelector((state: any) => state?.spell);
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
    </div>
  );
};

export default Header;
