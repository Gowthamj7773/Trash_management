
import { ToastContainer, toast } from 'react-toastify';
import  {Home ,Map}  from "../../assets/icons/icons"
function Login(){
    return (
      <div>
        <Home isPressed={false} isDarkTheme={false}/>
        <Map/>
      </div>)
}

export default Login
