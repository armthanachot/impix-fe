import { GoogleUserProfileType } from "../types/google"


interface ProfileProps {
    uProfile: GoogleUserProfileType | null;
}

const Profile: React.FC<ProfileProps> = ({uProfile}) => {

    return (
        <div className="">
            <img src={uProfile?.imageUrl} alt="" />
            <h3>User Logged in</h3>
            <p>Name: {uProfile?.name}</p>
            <p>Email: {uProfile?.email}</p>
        </div>
    )
}

export default Profile