import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login with Google</a>;
      default:
        return <a href="/surveys">view surveys</a>;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            className="left brand-logo"
            to={this.props.auth ? "/surveys" : "/"}
          >
            Emaily
          </Link>
          <ul className="right">
            <li>
              <a href="/api/logout">logout</a>
            </li>
            <li>
              <a href="/api/current_user">current user</a>
            </li>
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
