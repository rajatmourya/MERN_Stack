import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/pricing" ><button>Pricing</button></Link></li>
            <li><Link to="/about" state={{myKey:'Rock', LuckyNumber:'123'}} ><button>About</button></Link></li>
            <li><Link to="/login" ><button>Login</button></Link></li>
            <li><Link to="/books" ><button>Books</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navigation