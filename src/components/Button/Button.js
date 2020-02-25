import React from "react";

function Button({ loadNextFour, quickLoadItems, lazyLoadItems, navigateFirstPage }) {
  return (
    <div className="row mt-3">
      <div className="col">
        <button className="btn btn-danger">Reload Current Page</button>
      </div>
      <div className="col">
        <button onClick={() => navigateFirstPage()} className="btn btn-danger">Navigate First Page</button>
      </div>
      <div className="col">
        <button className="btn btn-success" onClick={() => loadNextFour()}>
          Navigate Next 4 Items
        </button>
      </div>
      <div className="col">
        <button onClick={() => quickLoadItems()} className="btn btn-info">
          Quick Load More Items
        </button>
      </div>
      <div className="col">
        <button onClick={() => lazyLoadItems()} className="btn btn-warning">
          Lazy Load More Items
        </button>
      </div>
    </div>
  );
}

export default Button;
