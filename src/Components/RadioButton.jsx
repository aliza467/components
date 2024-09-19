import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Container,
} from '@mui/material';

const RadioButtonComponent = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ fontSize: '1.2rem', mb: 1 }}>
          Select Your Gender
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={value}
          onChange={handleChange}
          row // You can remove 'row' for vertical alignment
        >
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
        <FormHelperText>Select one option above</FormHelperText>
      </FormControl>
    </Container>
  );
};

export default RadioButtonComponent;
