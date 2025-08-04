import { useNavigate } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import { useAuth } from "../context/AuthContext";

function ManageAccount() {
  const navigate = useNavigate("");
  const { user } = useAuth();
  return (
    <div>
      <div className="m-8 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>
          / <span className="text-black">My Account</span>
        </div>
        <div className="text-sm">
          Welcome <span className="text-[#DB4444]">{user.name} !</span>
        </div>
      </div>
      <div className="text-3xlx flex min-h-screen flex-col items-center justify-center">
        {/* <EditProfile /> */}
        This feature is coming soon
      </div>
    </div>
  );
}

export default ManageAccount;
