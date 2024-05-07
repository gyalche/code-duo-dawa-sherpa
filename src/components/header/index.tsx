import { Badge, Box, InputAdornment, TextField } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useTransition } from 'react';
import { useCustomDebounce } from '../../custom/debounce';
import { addSearch } from '../../stores/spellSlice';
import SearchIcon from '@mui/icons-material/Search';
import { useParams } from 'react-router-dom';
const Header = () => {
  const [search, setSearch] = useState('');
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
  console.log('this is params', params);
  useEffect(() => {
    dispatch(addSearch(debouncedValue));
  }, [debouncedValue]);

  console.log('debounced value', debouncedValue);
  return (
    <div className="head">
      {params?.subname ? (
        <Box sx={{ width: '300px' }}></Box>
      ) : (
        <TextField
          className="search"
          type="text"
          placeholder="search..."
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
      <Badge badgeContent={listOfFavroite?.length} color="primary">
        <GradeIcon color="action" />
      </Badge>
    </div>
  );
};

export default Header;
