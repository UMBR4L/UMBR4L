import "./UserAvatar.scss";
import defaultAvatar from "../../assets/images/Mohan-muruge.jpg";

const UserAvatar = () => { 
    console.log(defaultAvatar);
    return (
        <img class="header__avatar" src={defaultAvatar} alt={"user profile"} />
    );
};

export default UserAvatar;
