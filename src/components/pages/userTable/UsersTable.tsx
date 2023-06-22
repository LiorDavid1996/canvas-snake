import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomBreadcrumbs from '../../../features/CustomBreadcrumbs';
import { AuthContext } from "../../../context/auth-context";
import {  useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CenteredContainer = styled('div')({
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  height: "50vh",
  backgroundColor: "green",
});
const StickyTableHead = styled(TableHead)({
  position: 'sticky',
  top: 0,
  zIndex: 1,
});



const UserTable: React.FC = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTableRowClick = () => {
    navigate("/profileCards");
  };

  return (
    <>
 
      <CustomBreadcrumbs navi={1}/>
      <TableContainer sx={{ height: 300, width: 500 }} component={Paper}>
        <Table sx={{ height: "max-content", position: "sticky" }} aria-label="customized table">
          <StickyTableHead>
            <TableRow>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell align="right">score</StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </TableRow>
          </StickyTableHead>
          <TableBody>
            {user?.users?.map((user: any, index: number) => (
              <StyledTableRow key={user._id} onClick={handleTableRowClick}>
                <StyledTableCell component="th" scope="user">
                  {user.firstName}
                </StyledTableCell>
                <StyledTableCell align="right">{user.score}</StyledTableCell>
                <StyledTableCell align="right">{index + 1}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
   
  );
}

export default UserTable;

