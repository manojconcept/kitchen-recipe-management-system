import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const [showLoginIcon, setLoginIcon] = useState(true);

    const navigation = useNavigate();

    const handleSignin = () => {
        setLoginIcon(!showLoginIcon)
        return navigation("/signin")
    }

    useEffect(
        () => {

            return () => {
                setLoginIcon(false);
            }
        }, []

    )

    return (
        <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} style={{ cursor: "pointer" }} className="navbar-brand" href="#"><i className="bi bi-egg-fill text-warning text-uppercase fw-bold"></i>Kitchen Recipe <br />Management System</Link>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="#">Link</Link>
                        </li> */}

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </Link>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" href="#">Action mm</button></li>
                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" path={""}><i class="bi bi-stack text-warning"></i> Inventory</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        <i type="button" className="bi bi-search fs-1 m"></i>
                    </form>

                    <div className="d-flex" >
                        {/* <button onClick={handleSingup} className="btn btn-outline-success mx-2 m-2 " >Sign in</button> */}
                        {
                            showLoginIcon ? <i onClick={handleSignin} className="bi bi-box-arrow-in-right fs-1 m-2" type="button"></i> : ""
                        }
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
