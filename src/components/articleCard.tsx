import { Box, Stack, Image, Link as UILink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TArticle } from "../types";

interface TArticleCardProps {
  article: TArticle;
  disableHoverAnimation?: boolean;
  orientation?: "vertical" | "horizontal";
}

const ArticleCard: React.FC<TArticleCardProps> = ({
  article,
  disableHoverAnimation,
  orientation = "horizontal",
}: TArticleCardProps) => {
  return (
    <Stack
      direction={orientation === "horizontal" ? "row" : "column"}
      alignItems="flex-start"
      boxShadow={"lg"}
      bg="white"
      _hover={{
        cursor: "pointer",
        transform: disableHoverAnimation ? "" : "scale(1.1)",
      }}
      transition="all 0.5s ease"
      spacing={0}
    >
      <Image
        boxSize="150px"
        objectFit="cover"
        src={article.urlToImage}
        alt="news_image"
        h={orientation === "horizontal" ? "150px" : "190px"}
        w={orientation === "horizontal" ? "150px" : "full"}
      />
      <Box p={4}>
        <Text variant="heading3" noOfLines={1}>
          {article.title}
        </Text>
        <Text variant="caption" noOfLines={3}>
          {article.description}
        </Text>
        <UILink color="red.500">
          <Link to={`/${article.title}`} state={{ article, from: "pathname" }}>
            Read More {">>>"}
          </Link>
        </UILink>
      </Box>
    </Stack>
  );
};

export default ArticleCard;
