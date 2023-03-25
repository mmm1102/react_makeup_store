import React from "react";

const SearchBar = () => {
  return (
    <div className="col-md-6 d-flex align-items-center">
    <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-4 col-6">
      <input type="text" className="form-control" placeholder="Search product..." />
    </div>
    </div>
  );
};

export default SearchBar;
