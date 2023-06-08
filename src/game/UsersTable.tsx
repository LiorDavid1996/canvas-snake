import React from 'react';
import { Blur , Table,Td,Th,ExitButton,ExitIcon } from './Game.styles';
interface User {
    name: string;
    score: string;
  }
  
  interface UserTableProps {
    users: User[];
    setShowTable:any
  }
  
  const UserTable: React.FC<UserTableProps> = ({ users ,setShowTable}) => {
  return (
    <Blur>
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Score</Th>
          <Th onClick={()=>setShowTable(false)}>  <ExitButton >
                <ExitIcon src="Exit-icon.png" />
              </ExitButton></Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <Td>{user.name}</Td>
            <Td>{user.score}</Td>
            <Td>{index}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Blur>
  );
};

export default UserTable;
