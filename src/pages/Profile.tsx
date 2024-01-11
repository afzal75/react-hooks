import UserAvater from "../components/UserAvater";
import withBorder from "../components/withBorder";


const UserWithBorder = withBorder(UserAvater)

const Profile = () => {
    return (
        <div>
            <UserAvater />
            <UserWithBorder />
            <UserAvater />
            <UserAvater />
        </div>
    );
};

export default Profile;