import { SideBarWrap } from './SideBar.styles';
import { Icons } from '../../assets/icons';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <SideBarWrap>
        <div className="sidebar-top">
            <div className="sidebar-brand">
                <span className="brand-logo">
                    <img src={Icons.LogoWhite} alt="site brand logo" />
                </span>
                <span className='brand-text'>Saga.</span>
            </div>
            <button className="sidebar-close-btn">
                <MdOutlineClose size={24} />
            </button>
        </div>
        <div className="sidebar-body">
            <div className="sidebar-menu">
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link to='/' className="menu-link active">
                            <span className="menu-link-icon">
                                <img src={Icons.Chart} alt="" />
                            </span>
                            <span className="menu-link-text">Dashboard</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/' className="menu-link">
                            <span className="menu-link-icon">
                                <img src={Icons.Graph} alt="" />
                            </span>
                            <span className="menu-link-text">Leaderboard</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/' className="menu-link">
                            <span className="menu-link-icon">
                                <img src={Icons.Cart} alt="" />
                            </span>
                            <span className="menu-link-text">Order</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/' className="menu-link">
                            <span className="menu-link-icon">
                                <img src={Icons.Bag} alt="" />
                            </span>
                            <span className="menu-link-text">Products</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/' className="menu-link">
                            <span className="menu-link-icon">
                                <img src={Icons.Analytics} alt="" />
                            </span>
                            <span className="menu-link-text">Sales</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/' className="menu-link">
                            <span className="menu-link-icon">
                                <img src={Icons.Message} alt="" />
                            </span>
                            <span className="menu-link-text">Messages</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/' className="menu-link">
                            <span className="menu-link-icon">
                                <img src={Icons.Cog} alt="" />
                            </span>
                            <span className="menu-link-text">Settings</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/' className="menu-link">
                            <span className="menu-link-icon">
                                <img src={Icons.SignOut} alt="" />
                            </span>
                            <span className="menu-link-text">Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </SideBarWrap>
  )
}

export default SideBar