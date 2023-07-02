import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

interface CustomBreadcrumbsProps {
  navi: number;
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ navi }) => {
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent<HTMLSpanElement>, str: string) => {
    event.preventDefault();
    navigate(str);
  };

  const breadcrumbsStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: 'black',
    width: "500px",

  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'underline',
    color: 'inherit',
    cursor: 'pointer',
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbsStyle}>
      <Typography
        component="span"
        sx={linkStyle}
        onClick={(e: React.MouseEvent<HTMLSpanElement>) => { handleLinkClick(e, "/") }}
      >
        Game
      </Typography>
      {navi === 2 && <Typography
        component="span"
        sx={linkStyle}
        onClick={(e: React.MouseEvent<HTMLSpanElement>) => { handleLinkClick(e, "/UserTable") }}
      >
        Table
      </Typography>}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;


