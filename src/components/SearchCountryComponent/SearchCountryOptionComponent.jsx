import React from 'react';
import PropTypes from 'prop-types';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import styled from 'styled-components';
import { Divider, Stack } from '@mui/material';

const AdminSection = styled.span`
  color: #9E9E9E;
`;

function SearchCountryOptionComponent(props) {
  const { option } = props;
  const stackSpacing = 1;

  return (
    <li {...props}>
      {getUnicodeFlagIcon(option.country_code)}
      {' '}
      {option.name}
      <Stack direction="row" spacing={stackSpacing} divider={<Divider orientation="vertical" flexItem />} sx={{ marginLeft: stackSpacing }}>
        {option.admin3 && <AdminSection>{option.admin3}</AdminSection>}
        {option.admin2 && <AdminSection>{option.admin2}</AdminSection>}
        {option.admin1 && <AdminSection>{option.admin1}</AdminSection>}
      </Stack>
    </li>
  );
}

SearchCountryOptionComponent.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    elevation: PropTypes.number,
    feature_code: PropTypes.string,
    country_code: PropTypes.string,
    admin1_id: PropTypes.number,
    admin2_id: PropTypes.number,
    admin3_id: PropTypes.number,
    timezone: PropTypes.string,
    population: PropTypes.number,
    country_id: PropTypes.number,
    country: PropTypes.string,
    admin1: PropTypes.string,
    admin2: PropTypes.string,
    admin3: PropTypes.string,
    postcodes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default SearchCountryOptionComponent;
