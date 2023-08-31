import {Link} from 'react-router-dom'
import './index.css'

const Header=()=>(

    <div>
       <Link to="/login"><button>Login</button></Link> 
        <button>Signup</button>
    </div>
)
export default Header