import React from 'react';
import { Link } from '@reach/router';

const catgor= () => (
  <div className='row'>
    <div className="col-md-1 col-sm-2 col-3 mb-1"></div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa icon_link"></i>
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
            <i className="fa icon_puzzle"></i>
            <span>Design</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa  icon_easel"></i>
            <span>Marketing</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa icon_laptop"></i>
            <span>Software</span>
        </Link>
    </div>
    <div className="col-md-1 col-sm-2 col-3 mb-1"></div>
  </div>
);
export default catgor;