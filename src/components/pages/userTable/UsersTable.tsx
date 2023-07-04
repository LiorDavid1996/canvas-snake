import { useContext, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Container } from "./UserTable.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomBreadcrumbs from "../../../features/CustomBreadcrumbs";
import { AuthContext } from "../../../context/auth-context";
import { useNavigate } from "react-router-dom";

const StickyTableHead = styled(TableHead)(({ theme }) => ({
  position: "sticky",
  top: 0,

  zIndex: 10,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : "#383838",
    color: theme.palette.mode === "light" ? "#000" : "#fff",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)<{ isCurrentUser?: boolean }>`
  ${({ theme, isCurrentUser }) =>
    isCurrentUser &&
    `
    background-color: ${theme.palette.mode === "light" ? "#ff0000" : "#550000"};
  `}
`;

const UserTable: React.FC = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const tableRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    if (tableRef.current && user) {
      const registeredUserRow = Array.from(
        tableRef.current.querySelectorAll("tr")
      ).find((row) => {
        const userId = row.getAttribute("data-user-id");
        return userId === user.id;
      });

      if (registeredUserRow) {
        registeredUserRow.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [user]);

  return (
    <Container>
      <CustomBreadcrumbs navi={1} />
      <TableContainer sx={{ height: 300, width: 500 }} component={Paper}>
        <Table
          sx={{ height: "max-content", position: "sticky" }}
          aria-label="customized table"
        >
          <StickyTableHead>
            <TableRow>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell align="right">score</StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </TableRow>
          </StickyTableHead>
          <TableBody ref={tableRef}>
            {user?.users?.map((userRow: any, index: number) => (
              <StyledTableRow
                key={userRow._id}
                data-user-id={userRow._id}
                isCurrentUser={userRow._id === user.id}
              >
                <StyledTableCell component="th" scope="user">
                  {userRow.firstName}
                </StyledTableCell>
                <StyledTableCell align="right">{userRow.score}</StyledTableCell>
                <StyledTableCell align="right">{index + 1}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserTable;
