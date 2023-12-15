import React from "react";
import "./FilterOrders.css";
import { FilterOrdersProps } from "../../types/types";

export const FilterOrders: React.FC<FilterOrdersProps> = ({
  handleSearchChange,
}) => {
  return (
    <div className="filter-container">
      <div className="state-order">
        <p className="upcoming">Upcoming</p>
        <p className="completed-past">Completed</p>
        <p className="completed-past">Past</p>
      </div>
      <div className="search">
        <img src="/search.svg" alt="Search" className="search-image" />
        <input
          className="search-input"
          placeholder="Search.."
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};
