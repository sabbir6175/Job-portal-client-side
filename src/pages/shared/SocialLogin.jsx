import { useContext } from "react";
import AuthContext from "../../context/Authcontext/AuthContext";
import { useNavigate } from "react-router-dom";




const SocialLogin = () => {
    const { singWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const from = location.state || '/'
    const handleSingInGoogle =()=>{
        singWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from)
            })
            .catch(error => {
                // console.log(error)
            })
    }
    return (
        <div className="mx-5 mb-3">
            <div className="divider">OR</div>
            <button onClick={handleSingInGoogle} className="btn btn-warning w-full"> Google</button>
        </div>
    );
};

export default SocialLogin;