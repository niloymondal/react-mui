import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> H1 Heading</Typography>
      <Typography variant="h2"> H2 Heading</Typography>
      <Typography variant="h3"> H3 Heading</Typography>
      <Typography variant="h4" component='h1' gutterBottom> H4 Heading</Typography>
      <Typography variant="h5"> H5 Heading</Typography>
      <Typography variant="h6"> H6 Heading</Typography>

      <Typography variant="subtitle1"> Subtitle 1</Typography>
      <Typography variant="subtitle2"> Subtitle 2</Typography>

      <Typography variant="body1">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        recusandae odio blanditiis ratione tenetur dignissimos iure iste aperiam
        esse provident similique labore itaque aut ea, molestiae vitae
        voluptates, sed exercitationem!
      </Typography>
      <Typography variant="body2">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        reiciendis consequatur eius voluptate! Repudiandae culpa corporis ab
        ducimus dolores enim nostrum eaque, aspernatur repellat minus ipsum ad
        autem maxime doloremque.
      </Typography>
    </div>
  );
};
