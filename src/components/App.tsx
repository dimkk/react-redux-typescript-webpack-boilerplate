import * as React from "react";
import { Link, hashHistory } from 'react-router'
import { connect } from "react-redux";

class App extends React.Component<any, void> {
    render() {
        const { children, session, login, logout } = this.props;
        return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel">
                                <ul id="myTab1" className="nav nav-tabs nav-justified">
                                    <li className=""><Link to="/">Home</Link></li>
                                    <li className=""><Link to="/foo">Foo</Link></li>
                                </ul>
                            </div>
                            <div id="myTabContent" className="tab-content">
                                <div className="tab-pane fade active in" id="home1">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}

export default connect()(App);