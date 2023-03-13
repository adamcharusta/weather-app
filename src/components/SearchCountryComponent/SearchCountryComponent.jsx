import React from 'react';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { geocodingApi } from '../../axiosInstances';
import SearchCountryOptionComponent from './SearchCountryOptionComponent';
import { addCountry } from '../../store/countrySlice';

export default function SearchCountryComponent() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleInputChange = (event) => {
    const { value } = event.target;

    if (value) {
      setOptions([]);
      setLoading(true);
      geocodingApi.get('/search', { params: { name: value } }).then(({ data }) => {
        if (data.results) {
          setOptions(data.results);
        }
      }).finally(() => { setLoading(false); });
    } else {
      setOptions([]);
      setLoading(false);
    }
  };

  const handleAutocompleteChange = (event, newValue) => {
    if (newValue) {
      dispatch(addCountry(newValue));
    }
  };

  return (
    <Autocomplete
      id="country-search"
      data-testid="country-search"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
        setOptions([]);
        setLoading(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={handleAutocompleteChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t('country')}
          InputProps={{
            ...params.InputProps,
            onChange: handleInputChange,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <SearchCountryOptionComponent {...props} option={option} key={option.id} />
      )}
    />
  );
}
