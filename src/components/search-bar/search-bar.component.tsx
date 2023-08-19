import { Box, TextField, useTheme } from "@mui/material";
import { searchBarStyles } from "./search-bar.component.styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useCallback } from "react";
import { resetMoviesList } from "../../redux/movies/movies.reducer";
import { searchMoviesByName } from "../../redux/movies/movies.action";

type SearchBarProps = {
  searchValue: string,
  updateSearchValue: (value: string) => void,
};

let timeoutId: number;

const SearchBar = ({ searchValue, updateSearchValue }: SearchBarProps) => {
  const styles = searchBarStyles(useTheme());
  const dispatch = useDispatch<AppDispatch>();

  //debounce function to call search movie on user input
  const debounce = useCallback((value: string) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch(resetMoviesList(true));
      dispatch(searchMoviesByName({ page: 1, value }));
    }, 700);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateSearchValue(value);
    if (value.length > 3) {
      debounce(value);
    } else {
      clearTimeout(timeoutId);
    }
  };

  return (
    <Box sx={styles.container}>
      <TextField
        fullWidth
        size="small"
        placeholder="Search..."
        sx={styles.search}
        InputProps={{
          startAdornment: <SearchIcon sx={styles.searchIcon} />,
          endAdornment: searchValue.length > 0 && (
            <CloseIcon
              sx={styles.closeIcon}
              onClick={() => updateSearchValue("")}
            />
          ),
        }}
        value={searchValue}
        onChange={handleSearch}
      />
    </Box>
  );
};
export default SearchBar;
