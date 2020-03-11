import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <li><a href="#">Sign with Google</a></li>
                );
            default:
                return 'i am loggedin';
        }
    }
    render(){
        console.log(this.props);
        return(
            <nav className="nav-wrapper">
                <div>
                    <a href="#" className=" left brand-logo">Emaily dev</a>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(auth){
    return{auth}
}

export default connect(mapStateToProps)(Header);