import useUsersData from "../hooks/useUsersData";
import UserList from "./UserList";

const UsersContainer = () => {
    const { isLoading, error, data } = useUsersData()


    return (
        <UserList
            data={data}
            isLoading={isLoading}
            error={error}
        />
    );
};

export default UsersContainer;