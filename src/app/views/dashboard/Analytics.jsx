import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  styled,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import DoughnutChart from './shared/Doughnut';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import ComparisonChart2 from './shared/ComparisonChart2';
import { useNavigate } from 'react-router-dom';
import useAuth from 'app/hooks/useAuth';
import BarGraph from './shared/BarGraph';
import StatCards3 from './shared/StatCards3';
import BarGraph2 from './shared/BarGraph2';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const states = [
  {
    name: 'Andhra Pradesh',
    abbreviation: 'AP',
  },
  {
    name: 'Arunachal Pradesh',
    abbreviation: 'AR',
  },
  {
    name: 'Assam',
    abbreviation: 'AS',
  },
  {
    name: 'Bihar',
    abbreviation: 'BR',
  },
  {
    name: 'Chhattisgarh',
    abbreviation: 'CT',
  },
  {
    name: 'Goa',
    abbreviation: 'GA',
  },
  {
    name: 'Gujarat',
    abbreviation: 'GJ',
  },
  {
    name: 'Haryana',
    abbreviation: 'HR',
  },
  {
    name: 'Himachal Pradesh',
    abbreviation: 'HP',
  },
  {
    name: 'Jharkhand',
    abbreviation: 'JH',
  },
  {
    name: 'Karnataka',
    abbreviation: 'KA',
  },
  {
    name: 'Kerala',
    abbreviation: 'KL',
  },
  {
    name: 'Madhya Pradesh',
    abbreviation: 'MP',
  },
  {
    name: 'Maharashtra',
    abbreviation: 'MH',
  },
  {
    name: 'Manipur',
    abbreviation: 'MN',
  },
  {
    name: 'Meghalaya',
    abbreviation: 'ML',
  },
  {
    name: 'Mizoram',
    abbreviation: 'MZ',
  },
  {
    name: 'Nagaland',
    abbreviation: 'NL',
  },
  {
    name: 'Odisha',
    abbreviation: 'OD',
  },
  {
    name: 'Punjab',
    abbreviation: 'PB',
  },
  {
    name: 'Rajasthan',
    abbreviation: 'RJ',
  },
  {
    name: 'Sikkim',
    abbreviation: 'SK',
  },
  {
    name: 'Tamil Nadu',
    abbreviation: 'TN',
  },
  {
    name: 'Telangana',
    abbreviation: 'TG',
  },
  {
    name: 'Tripura',
    abbreviation: 'TR',
  },
  {
    name: 'Uttar Pradesh',
    abbreviation: 'UP',
  },
  {
    name: 'Uttarakhand',
    abbreviation: 'UL',
  },
  {
    name: 'West Bengal',
    abbreviation: 'WB',
  },
];

const unionTerritories = [
  {
    name: 'Andaman and Nicobar Islands',
    abbreviation: 'AN',
  },
  {
    name: 'Chandigarh',
    abbreviation: 'CH',
  },
  {
    name: 'Dadar and Nagar Haveli',
    abbreviation: 'DN',
  },
  {
    name: 'Daman and Diu',
    abbreviation: 'DD',
  },
  {
    name: 'Delhi',
    abbreviation: 'DL',
  },
  {
    name: 'Jammu and Kashmir',
    abbreviation: 'JK',
  },
  {
    name: 'Ladakh',
    abbreviation: 'LA',
  },
  {
    name: 'Lakshadweep',
    abbreviation: 'LD',
  },
  {
    name: 'Pondicherry',
    abbreviation: 'PY',
  },
];

const Analytics = () => {
  const { palette } = useTheme();
  const { user } = useAuth();
  //console.log(user);
  if (user.role === 'SUPERADMIN') {
    return (
      <Fragment>
        <ContentBox className="analytics">
          <StatCards/>
          <Card>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",px:2}}>
              <Title>Distribution of stamp papers</Title>
              <FormControl sx={{ m:2,width:300 }} size="small">
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={values.state}
                  name="state"
                  label="Age"
                  //onChange={handleChange}
                  //onBlur={handleBlur}
                >
                  <ListSubheader>States</ListSubheader>
                  {states.map((state) => (
                    <MenuItem key={state.name} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                  <ListSubheader>Union Territories</ListSubheader>
                  {unionTerritories.map((state) => (
                    <MenuItem key={state.name} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <BarGraph2/>
          </Card>
        </ContentBox>
      </Fragment>
    );
  }
  if (user.role === 'ADMIN') {
    return (
      <Fragment>
        <ContentBox className="analytics">
          <StatCards3 />
          <BarGraph />
        </ContentBox>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <ContentBox className="analytics">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {/*   <StatCards /> */}
              {user.role === 'ADMIN' && <TopSellingTable />}
              <StatCards2 />
              {/* <H4>Ongoing Projects</H4>
              <RowCards /> */}
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Title>Availability</Title>
                <ComparisonChart2
                //="300px"
                //color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
                {/* <BarGraph /> */}
                {/*user.role === 'ADMIN' && (
                  <Button onClick={() => navigate('/srd/currentavailable')}>
                    View Details {'->'}
                  </Button>
                )*/}
              </Card>
              {/* <UpgradeCard /> */}
              {/* <Campaigns /> */}
            </Grid>
          </Grid>
        </ContentBox>
      </Fragment>
    );
  }
};

export default Analytics;
