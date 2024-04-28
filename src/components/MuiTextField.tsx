import { Stack, TextField } from "@mui/material";
export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          helperText="Don't share your password with anyone"
          disabled
        />
        <TextField label="Read Only" InputProps={{readOnly: true}} />
      </Stack>
    </Stack>
  );
};
