import React from "react";
import type { TagType } from "./tag.types";

export const Tag = ({ tag }: { tag: TagType }) => {


  const tagColors: Record<string, { bg: string; text: string }> = {
    // Frontend
    React: { bg: "#61DBFB", text: "#000" }, // Aqua Blue
    Angular: { bg: "#E40035", text: "#fff" }, // Red Ribbon [Angular Official]
    Vue: { bg: "#42b883", text: "#fff" }, // Emerald Green
    TypeScript: { bg: "#3178C6", text: "#fff" }, // Official Blue
    JavaScript: { bg: "#F0DB4F", text: "#323330" }, // Yellow/Corn
    Storybook: { bg: "rgb(255, 71, 133)", text: "#fff" },

    // Mobile
    Ionic: { bg: "#176bff", text: "#fff" },
    ReactNative: { bg: "#61DBFB", text: "#000" },

    // Backend & Runtime
    Node: { bg: "#339933", text: "#fff" }, // Official Node Green
    Python: { bg: "#3776AB", text: "#fff" }, // Python Blue
    Go: { bg: "#00ADD8", text: "#fff" }, // Gopher Blue
    Rust: { bg: "#000000", text: "#fff" }, // Black

    // Database
    PostgreSQL: { bg: "#336791", text: "#fff" }, // Elephant Blue
    MongoDB: { bg: "#4DB33D", text: "#fff" }, // Apple Green
    Redis: { bg: "#D82C20", text: "#fff" }, // Red

    // Infrastructure & DevOps
    Docker: { bg: "#1d63ed", text: "#fff" }, // Docker Blue
    Kubernetes: { bg: "#326CE5", text: "#fff" }, // Official Blue
    AWS: { bg: "#FF9900", text: "#000" }, // Amazon Orange
    GraphQL: { bg: "#E10098", text: "#fff" }, // Pink

    // Fallback
    default: { bg: "#f3f4f6", text: "#374151" }, // Neutral Gray
  };

  const currentStyle = tagColors[tag] || tagColors.default;

  const tagStyle = {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "16px",
    fontSize: "0.85rem",
    fontWeight: "600",
    backgroundColor: currentStyle.bg,
    color: currentStyle.text,
    marginRight: "8px",
    marginBottom: "8px",
    fontFamily: "sans-serif",
  };

  return <span style={tagStyle}>{tag}</span>;
};
