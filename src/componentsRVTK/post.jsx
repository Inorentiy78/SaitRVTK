import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

/*
Ученые обнаружили пять новых видов ежей. Среди них вампир
Лукашенко подписал республиканский бюджет на 2024 год
19:24
29.12.2023
#экономика
#бюджет
#закон
Закон "О республиканском бюджете на 2024 год" в пятницу включен в Национальный реестр. Это значит, что документ подписан президентом.

Как сообщал Smartpress.by, доходы по проекту республиканского бюджета на 2024 год предусматриваются в сумме 39 млрд 906,4 млн рублей, а расходы - в сумме 44 млрд 657,4 млн рублей.

Таким образом, дефицит республиканского бюджета предусмотрен в размере 4 млрд 751,1 млн

*/

const newpost = {
  title: "",
  datetime: new Date(),
  image: "",
  tags: [""],
  description: "",
  likes: 0,
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({ title, datetime, image, tags, description }) {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: { xs: 600, sm: 900, md: 1024 } }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={datetime}
      />
      <CardMedia component="img" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {tags}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            setLiked(true);
          }}
        >
          <ThumbUpOffAltIcon sx={{ color: liked ? "red" : "gray" }} />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            setLiked(false);
          }}
        >
          <ThumbDownOffAltIcon sx={{ color: liked ? "gray" : "red" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
