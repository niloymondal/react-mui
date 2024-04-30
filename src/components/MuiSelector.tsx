import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelector = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value= e.target.value
    setCountries(typeof value === 'string'? value.split(','): value );
  };
  return (
    <Box width={"250px"}>
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
