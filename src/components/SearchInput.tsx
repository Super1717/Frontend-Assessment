"use client";

import { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { veryableBlue } from "@/theme/globalStyles";

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
      placeholder={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: veryableBlue }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        width: 400,
        bgcolor: "background.paper",
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          boxShadow: 1,
          "&:hover fieldset": { borderColor: veryableBlue },
          "&.Mui-focused fieldset": { borderColor: veryableBlue },
        },
      }}
    />
  );
}
