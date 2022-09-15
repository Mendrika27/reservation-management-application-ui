import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormProvider, RHFTextField} from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    dateR: Yup.string().required('Email is required'),
    place: Yup.number().required('Number of seats is required'),

  });

  const defaultValues = {
    email: '',
    place: ''
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="dateR" label="Reservation date" />

        <RHFTextField
          name="place"
          label="Seats"
        />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Reserver
      </LoadingButton>
    </FormProvider>
  );
}
