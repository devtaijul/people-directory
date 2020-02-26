import React from "react";
import { BrowserRouter } from "react-router-dom";

function Button({
  loadNextFour,
  quickLoadItems,
  lazyLoadItems,
  navigateFirstPage
}) {
  return (
    <BrowserRouter>
      <div className="row mt-3">
        <div className="direction-button">
          <button className="btn btn-red">Reload Current Page</button>
        </div>
        <div className="direction-button">
          <button
            onClick={() => navigateFirstPage()}
            className="btn btn-red"
          >
            Navigate First Page
          </button>
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
    </BrowserRouter>
  );
}

export default Button;
