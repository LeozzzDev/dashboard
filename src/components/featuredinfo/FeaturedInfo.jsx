import React from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export function FeaturedInfo() {
  return (
    <div className="featuredinfo">
      <div className="featuredinfo-item">
        <span className="featuredinfo-title">Revenue</span>
        <div className="featuredinfo-money-wrapper">
          <span className="featuredinfo-money">$2,500</span>
          <span className="featuredinfo-money-rate">
            -11.4
            <ArrowDownward className="featuredinfo-item-icon negative" />
          </span>
        </div>
        <span className="featuredinfo-sub">Compared to last month</span>
      </div>
      <div className="featuredinfo-item">
        <span className="featuredinfo-title">Cost</span>
        <div className="featuredinfo-money-wrapper">
          <span className="featuredinfo-money">$12,100</span>
          <span className="featuredinfo-money-rate">
            +5.5
            <ArrowUpward className="featuredinfo-item-icon" />
          </span>
        </div>
        <span className="featuredinfo-sub">Compared to last month</span>
      </div>
      <div className="featuredinfo-item">
        <span className="featuredinfo-title">Sales</span>
        <div className="featuredinfo-money-wrapper">
          <span className="featuredinfo-money">$23,500</span>
          <span className="featuredinfo-money-rate">
            -11.4
            <ArrowDownward className="featuredinfo-item-icon negative" />
          </span>
        </div>
        <span className="featuredinfo-sub">Compared to last month</span>
      </div>
    </div>
  );
}
