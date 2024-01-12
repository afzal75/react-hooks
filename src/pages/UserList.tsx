
const UserList = ({ isLoading, error, data }) => {

    if (isLoading && !error) {
        return <p>Loading...............</p>
    }

    if (error) {
        return <p>Something went wrong</p>
    }

    return (
        <div>
            <div>
                {data?.map((item) => <p>{item?.name}</p>)}
            </div>
        </div>
    );
};

export default UserList;