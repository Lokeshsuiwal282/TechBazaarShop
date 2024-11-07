import react, { useState } from 'react'
import { Link } from "react-router-dom";

import './profilesytle.css';
// this is import icons 
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const ProfileAccounts = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Lokesh Kumar');
    const [lastName, setLastName] = useState('Saini');
    const [email, setEmail] = useState('informationcomputer815@gmail.com');
    const [mobile, setMobile] = useState('+919588055339');
    const [gender, setGender] = useState('Male');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Save changes or update the profile details here
    };

    const [activeTab, setActiveTab] = useState('profile'); // Setting default active tab

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  

    return (
        <main className="main pages">
            <div className="page-header breadcrumb-wrap">
                <div className="container-flude">
                    <div className="breadcrumb">
                        <Link to="/"><WindowIcon /> Home</Link>
                        <span><ArrowForwardIosOutlinedIcon /></span>
                        <Link to="/listing-Page/product-details">Pages</Link>
                        <span><ArrowForwardIosOutlinedIcon /> My Account</span>
                    </div>
                </div>
            </div>
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='profile-image'>
                                <div className='pro-img'>
                                    <img src='src/assets/images/profile-user.png' alt='Profile'></img>
                                </div>
                                <div className='profile-info'>
                                    <p>Hello,</p>
                                    <h4>Profile Name</h4>
                                </div>
                            </div>
                            <div className="dashboard-menu">
                                <ul className="nav flex-column" role="tablist">
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabClick('profile')}>
                                            <AccountCircleOutlinedIcon /> Profile
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleTabClick('dashboard')}>
                                            <DashboardOutlinedIcon /> Dashboard
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => handleTabClick('orders')}>
                                            <AddShoppingCartOutlinedIcon /> Orders
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'track-orders' ? 'active' : ''}`} onClick={() => handleTabClick('track-orders')}>
                                            <ShareLocationOutlinedIcon /> Track Your Order
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'address' ? 'active' : ''}`} onClick={() => handleTabClick('address')}>
                                            <HomeOutlinedIcon /> My Address
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'account-detail' ? 'active' : ''}`} onClick={() => handleTabClick('account-detail')}>
                                            <SettingsOutlinedIcon /> Account details
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='dashboard-menu'>
                               <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link to={'/Account_9df4-32vbe/Login-page'}>
                                            <button className="nav-link">
                                                <LogoutOutlinedIcon /> Logout
                                            </button>
                                        </Link>
                                    </li>
                               </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content account dashboard-content pl-50">
                                {activeTab === 'profile' && (
                                    <div className="tab-pane fade active show">
                                    
                                            <div className="profile-container">
                                                <h3>Personal Information</h3>
                                                <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>

                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        disabled={!isEditing}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input
                                                        type="text"
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        disabled={!isEditing}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label>Your Gender</label>
                                                    <div className="radio-group">
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                value="Male"
                                                                checked={gender === 'Male'}
                                                                onChange={(e) => setGender(e.target.value)}
                                                                disabled={!isEditing}
                                                            />
                                                            Male
                                                        </label>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                value="Female"
                                                                checked={gender === 'Female'}
                                                                onChange={(e) => setGender(e.target.value)}
                                                                disabled={!isEditing}
                                                            />
                                                            Female
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Email Address <span className="edit-btn" onClick={handleEditClick}>Edit</span></label>
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        disabled={!isEditing}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label>Mobile Number <span className="edit-btn" onClick={handleEditClick}>Edit</span></label>
                                                    <input
                                                        type="text"
                                                        value={mobile}
                                                        onChange={(e) => setMobile(e.target.value)}
                                                        disabled={!isEditing}
                                                    />
                                                </div>

                                                {isEditing && (
                                                    <button onClick={handleSaveClick} className="save-btn">Save</button>
                                                )}
                                            </div>
                                        
                                    </div>
                                )}
                                {activeTab === 'dashboard' && (
                                    <div className="tab-pane fade">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="mb-0">Hello Rosie!</h3>
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    From your account dashboard. you can easily check &amp; view your <a href="#">recent orders</a>,<br />
                                                    manage your <a href="#">shipping and billing addresses</a> and <a href="#">edit your password and account details.</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'orders' && (
                                    <div className="tab-pane fade">

                                            <div className="card-header">
                                                <h3 className="mb-0">Your Orders</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>#1357</td>
                                                                <td>March 45, 2020</td>
                                                                <td>Processing</td>
                                                                <td>$125.00 for 2 items</td>
                                                                <td><a href="#" className="btn-small d-block">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>#2468</td>
                                                                <td>June 29, 2020</td>
                                                                <td>Completed</td>
                                                                <td>$364.00 for 5 items</td>
                                                                <td><a href="#" className="btn-small d-block">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>#2366</td>
                                                                <td>August 02, 2020</td>
                                                                <td>Completed</td>
                                                                <td>$280.00 for 3 items</td>
                                                                <td><a href="#" className="btn-small d-block">View</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                )}

                                {activeTab === 'track-orders' && (
                                    <div className="tab-pane fade">
                                            <div className="card-header">
                                                <h3 className="mb-0">Orders tracking</h3>
                                            </div>
                                            <div className="card-body contact-from-area">
                                                <p>To track your order please enter your OrderID in the box below and press Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                                            <div className="input-style mb-20">
                                                                <label>Order ID</label>
                                                                <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                                            </div>
                                                            <div className="input-style mb-20">
                                                                <label>Billing email</label>
                                                                <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                                            </div>
                                                            <button className="submit submit-auto-width" type="submit">Track</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                )}

                                {activeTab === 'address' && (
                                <div className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="card mb-3 mb-lg-0">
                                                <div className="card-header">
                                                    <h3 className="mb-0">Billing Address</h3>
                                                </div>
                                                <div className="card-body">
                                                    <address>
                                                        3522 Interstate<br />
                                                        75 Business Spur,<br />
                                                        Sault Ste. <br />Marie, MI 49783
                                                    </address>
                                                    <p>New York</p>
                                                    <a href="#" className="btn-small">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">Shipping Address</h5>
                                                </div>
                                                <div className="card-body">
                                                    <address>
                                                        4299 Express Lane<br />
                                                        Sarasota, <br />FL 34249 USA <br />Phone: 1.941.227.4444
                                                    </address>
                                                    <p>Sarasota</p>
                                                    <a href="#" className="btn-small">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                                {activeTab === 'account-detail' && (
                                    <div className="tab-pane fade">
    
                                        <div className="card-header">
                                            <h5>Account Details</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>Already have an account? <a href="page-login.html">Log in instead!</a></p>
                                            <form method="post" name="enq">
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <label>First Name <span className="required">*</span></label>
                                                        <input required className="form-control" name="name" type="text" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label>Last Name <span className="required">*</span></label>
                                                        <input required className="form-control" name="phone" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Display Name <span className="required">*</span></label>
                                                        <input required className="form-control" name="dname" type="text" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Email Address <span className="required">*</span></label>
                                                        <input required className="form-control" name="email" type="email" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Current Password <span className="required">*</span></label>
                                                        <input required className="form-control" name="password" type="password" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>New Password <span className="required">*</span></label>
                                                        <input required className="form-control" name="npassword" type="password" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Confirm Password <span className="required">*</span></label>
                                                        <input required className="form-control" name="cpassword" type="password" />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Save Change</button>
                                                    </div>
                                                </div>
                                            </form>
                            
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default ProfileAccounts;
