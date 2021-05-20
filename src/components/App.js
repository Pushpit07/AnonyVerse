import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          AnonyVerse
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>AnonyVerse</h1>
                <p>
                  A <code>decentralised social media</code> platform
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
