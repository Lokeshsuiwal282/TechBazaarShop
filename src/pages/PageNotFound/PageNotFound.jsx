import React from "react";
import './PageNotFoundSytle.css';
import error404customer from '../../../src/assets/images/404-error-customer.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CottageIcon from '@mui/icons-material/Cottage';

const PageNotFound=() =>{
    return(
        <main className="main page-404">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                            <p className="mb-20"><img src={error404customer} alt="" className="hover-up"/></p>
                            <h1 className="display-2 mb-30">Page Not Found</h1>
                            <br/>
                            <p className="font-lg text-grey-700 mb-30">
                                The link you clicked may be broken or the page may have been removed.<br/>
                                visit the <a href="/"> <span> Homepage</span></a> or <a href=""><span>Contact us</span></a> about the problem
                            </p>
                            <br/>
                            <div className="search-form">
                                <form action="#">
                                    <input type="text" placeholder="Search…"/>
                                    <button type="submit"><SearchOutlinedIcon/></button>
                                </form>
                            </div>
                            <br/>
                            <a className="btn btn-default submit-auto-width font-xs hover-up mt-30" href="/"><CottageIcon/> Back To Home Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PageNotFound;