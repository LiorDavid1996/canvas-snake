import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const CustomBreadcrumbs = () => {
  const breadcrumbsStyle = {
    color: 'white', // Apply custom color to the breadcrumbs
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbsStyle}>
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">/</Typography>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
