import React from 'react';

function ProductTabBar({ changeTab }) {
    return (
        <div className="nav-templates shadow text-center">
            <a href="#" className="nav-item" onClick={() => changeTab("overview")}>Overview </a>
            <a href="#" className="nav-item" onClick={() => changeTab("pages")}>Pages</a>
            <a href="#" className="nav-item" onClick={() => changeTab("fileStructure")}>File Structure</a>
            <a href="#" className="nav-item" onClick={() => changeTab("reviews")}>Reviews</a>
            <a href="#" className="nav-item" onClick={() => changeTab("changelog")}>Changelog</a>
            <a href="#" className="nav-item" onClick={() => changeTab("questions")}>Questions</a>
        </div>
    )
}

export default ProductTabBar;