import React from "react";

function Button({ loadNextFour, quickLoadItems, lazyLoadItems, navigateFirstPage }) {
  return (
    <div className="row mt-3">
      <div className="direction-button">
        <button className="btn btn-danger">Reload Current Page</button>
      </div>
      <div className="direction-button">
        <button onClick={() => navigateFirstPage()} className="btn btn-danger">Navigate First Page</button>
      </div>
      <div className="direction-button">
        <button className="btn btn-custom" onClick={() => loadNextFour()}>
          Navigate Next 4 Items
        </button>
      </div>
      <div className="direction-button">
        <button onClick={() => quickLoadItems()} className="btn btn-custom">
          Quick Load More Items
        </button>
      </div>
      <div className="direction-button">
        <button onClick={() => lazyLoadItems()} className="btn btn-custom">
          Lazy Load More Items
        </button>
      </div>
    </div>
  );
}

export default Button;
