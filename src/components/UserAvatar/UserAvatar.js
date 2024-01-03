import "./UserAvatar.scss";
import defaultAvatar from "../../assets/Images/Mohan-muruge.jpg";

const UserAvatar = () => { 
    return (
        <img className="header__avatar" src={defaultAvatar} alt={"user profile"} />
    );
};

export default UserAvatar;
