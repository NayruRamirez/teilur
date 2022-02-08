import React from 'react';
import { Link } from '@reach/router';

const catgor= () => (
  <div className='row'>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-chain-broken"></i>
            <span>Blockchain</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-database"></i>
            <span>Data</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-behance"></i>
            <span>Design</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-bar-chart"></i>
            <span>Marketing</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-android"></i>
            <span>Software</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-gitlab"></i>
            <span>Testing</span>
        </Link>
    </div>
  </div>
);
export default catgor;