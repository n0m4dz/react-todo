/**
 * Created by n0m4dz on 11/23/16.
 */
import React, {Component} from 'react'
import Header from './_partials/Header'
import Footer from './_partials/Footer'

class Layout extends Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <Header />
                    <main>
                        {this.props.children}
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Layout
