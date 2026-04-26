"use client";

import React from "react";

export const GridOverlay = () => {
  return (
    <div className="grid-overlay hidden lg:block">
      {/* 5 Vertical lines similar to Framer's layout */}
      <div className="grid-line left-[20%]" />
      <div className="grid-line left-[40%]" />
      <div className="grid-line left-[60%]" />
      <div className="grid-line left-[80%]" />
    </div>
  );
};
