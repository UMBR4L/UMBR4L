import "./UserAvatar.scss";
import defaultAvatar from "../../assets/images/Mohan-muruge.jpg";

const UserAvatar = () => { 
    return (
        <img className="user-avatar" src={defaultAvatar} alt={"user profile"} />
    );
};

export default UserAvatar;
