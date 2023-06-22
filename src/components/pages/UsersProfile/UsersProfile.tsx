import React,{useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import CustomBreadcrumbs from '../../../features/CustomBreadcrumbs';
import { AuthContext } from '../../../context/auth-context';

const UsersProfile: React.FC = () => {
  const {user}=useContext(AuthContext)
  console.log(user,"lllll");
  

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
 
  return (
    <Container sx={{ marginTop: '1rem' }} fixed>
       <CustomBreadcrumbs navi={2}/>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {user?.users?.map((user:any, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 245 }}>
              <CardMedia sx={{ height: 120 }} image="profile_user.jpg" title="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  position: {index}
                </Typography>
                <Typography marginTop="10px" variant="body2" color="text.secondary">
                  best score: {user.score}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UsersProfile;

