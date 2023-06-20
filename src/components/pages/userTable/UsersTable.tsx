
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomBreadcrumbs from '../../../features/CustomBreadcrumbs';

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface User {
  firstName: string;
  score: string;
  lastName:string
  _id:string
}
interface UserTableProps {
  users: User[] | undefined;
  setShowTable:any
  userId:string | undefined
}

const UserTable: React.FC<UserTableProps> = ({ users ,setShowTable,userId}) => {
  return (
    <>
    <CustomBreadcrumbs/>
    <TableContainer onClick={()=>{setShowTable(false)}} component={Paper}>
      
      <Table sx={{ minWidth: 50 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell align="right">score</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user,index) => (
            <StyledTableRow key={user._id}>
              
              <StyledTableCell component="th" scope="user">
                {user.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{user.score}</StyledTableCell>
              <StyledTableCell align="right">{index+1}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}



export default UserTable;