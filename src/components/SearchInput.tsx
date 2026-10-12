"use client";

import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface SearchInputProps {
  onSearch: (value: string) => void;
  label?: string;
  delay?: number;
}

export function SearchInput({
  onSearch,
  label = "Search",
  delay = 300,
}: SearchInputProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => onSearch(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay, onSearch]);

  return (
    <TextField
      size="small"
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
