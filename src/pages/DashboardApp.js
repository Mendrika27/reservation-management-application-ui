import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import {
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Tableau de bord">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Prêt?
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Reservation de l'année"
              subheader="(+43%) de l'an dernier"
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
              ]}
              chartData={[
                {
                  name: 'Livraisons',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Voyages',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Le plus visité"
              chartData={[
                { label: 'Tamatave', value: 4344 },
                { label: 'Majunga', value: 5435 },
                { label: 'Antsirabe', value: 1443 },
                { label: 'Tuléar', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Classements"
              chartData={[
                { label: 'Antananarivo', value: 400 },
                { label: 'Andekaleka', value: 430 },
                { label: 'Antsirabe', value: 470 },
                { label: 'Vavatenina', value: 540 },
                { label: 'Fénérive Est', value: 580 },
                { label: 'Tuléar', value: 690 },
                { label: 'Nosy Be', value: 1100 },
                { label: 'Tamatave', value: 1200 },
                { label: 'Majunga', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Calendrier"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '20 autres reservations',
                  '12 Montants payés',
                  '12 Livraisons annulés',
                  '10 livraisons',
                  '1 Voyage annulé',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
