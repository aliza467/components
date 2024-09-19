import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormHelperText,
  Tooltip,
  IconButton,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

// Define Yup validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const Form = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card elevation={6} sx={{ borderRadius: 5, backgroundColor: '#f9fafb' }}>
        <CardContent sx={{ padding: 5 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 700, mb: 2 }}>
            Registration Form
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 3 }} color="textSecondary">
            Please fill in the details below to register
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box sx={{ mt: 3 }}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    InputProps={{
                      endAdornment: (
                        <Tooltip title="Enter your first name" arrow>
                          <IconButton>
                            <InfoIcon color="action" />
                          </IconButton>
                        </Tooltip>
                      ),
                    }}
                  />
                )}
              />

              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    InputProps={{
                      endAdornment: (
                        <Tooltip title="Enter your last name" arrow>
                          <IconButton>
                            <InfoIcon color="action" />
                          </IconButton>
                        </Tooltip>
                      ),
                    }}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      endAdornment: (
                        <Tooltip title="Enter a valid email address" arrow>
                          <IconButton>
                            <InfoIcon color="action" />
                          </IconButton>
                        </Tooltip>
                      ),
                    }}
                  />
                )}
              />

              {/* Gender Radio Buttons */}
              <FormControl component="fieldset" error={!!errors.gender} sx={{ mt: 2 }}>
                <FormLabel component="legend">Gender</FormLabel>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup row {...field}>
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  )}
                />
                <FormHelperText>{errors.gender?.message}</FormHelperText>
              </FormControl>

              {/* Terms and Conditions Checkbox */}
              <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="I accept the terms and conditions"
                  />
                )}
              />
              {errors.terms && (
                <FormHelperText error>{errors.terms.message}</FormHelperText>
              )}
            </Box>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: 3,
                  textTransform: 'none',
                  paddingX: 5,
                  paddingY: 1.5,
                  transition: '0.3s ease',
                  '&:hover': {
                    backgroundColor: '#0057D9',
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Form;

