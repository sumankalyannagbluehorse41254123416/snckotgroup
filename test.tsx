"use client";
import React, { useState } from "react";

interface HighlightsSectionProps {
  tabs: { id: string; label: string }[];
  sections: { id: string; title: string; points: string[] }[];
}

const HighlightsSection = ({ tabs, sections }: HighlightsSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="pHighlights gopika" id="highlights">
      <div className="container">
        <div className="blockHeads">
          <h5>
            <span>RESIDENTIAL FLAT FEATURES</span> Highlights
          </h5>
        </div>

        <div className="row">
          {/* Tabs */}
          <div className="phTabs">
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`${tab.id} ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ cursor: "pointer" }}>
                  <p>{tab.label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="phMatr">
            {sections.map((sec) => (
              <div
                key={sec.id}
                className="phmInr"
                id={`${sec.id}m`}
                style={{ display: activeTab === sec.id ? "block" : "none" }}>
                <h5>{sec.title}</h5>
                <ul className="p_list">
                  {sec.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
