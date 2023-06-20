import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import CustomBreadcrumbs from '../../../features/CustomBreadcrumbs';

const UsersProfile: React.FC = () => {
  const users=[
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12},
    {name:"lior",lastName:"david",position : 12,bestScore : 12}
  ]
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
 
  return (
    <Container sx={{ marginTop: '1rem' }} fixed>
       <CustomBreadcrumbs/>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {users.map((user, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 245 }}>
              <CardMedia sx={{ height: 120 }} image="profile_user.jpg" title="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name} {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  position: {user.position}
                </Typography>
                <Typography marginTop="10px" variant="body2" color="text.secondary">
                  best score: {user.bestScore}
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

