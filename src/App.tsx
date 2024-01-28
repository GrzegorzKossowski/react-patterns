import { useFetchUsers } from './api/usersApi/useFetchUsers';

function App() {
    const { users, fetchUsersStatus } = useFetchUsers();

    return (
        <>
            {/* To test the selected functionality, use a specific 
            component here */}
            {fetchUsersStatus === 'PENDING' && <>Loading...</>}
            {users && users.map(user => <div key={user.id!}>{user.name!}</div>)}
        </>
    );
}

export default App;
