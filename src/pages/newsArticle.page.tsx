import {
  chakra,
  Image,
  Box,
  Text,
  Divider,
  VStack,
  HStack,
  Link as UILink,
  Icon,
} from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const NewsArticlePage = () => {
  // We are passing state in location object as currently there is not way to get article by Id
  const location = useLocation();
  const { article } = location.state;

  return (
    <chakra.main h="full">
      <Image
        w="full"
        h="500px"
        loading="lazy"
        src={article.urlToImage}
        alt="article-image"
        objectFit="cover"
      />
      <HStack
        mx={{ base: "4rem", lg: "10rem" }}
        alignItems="flex-start"
        spacing={6}
      >
        <Box minW="140px" maxW="140px" mt={10}>
          <VStack minW="140px" mt={10} alignItems="flex-start">
            <UILink color="blue.500">
              <Link to="/">
                <HStack alignItems="center">
                  <Icon as={IoMdArrowBack} />
                  <Text>Back</Text>
                </HStack>
              </Link>
            </UILink>
            <Box>
              <Text fontStyle="italic">Written By:</Text>
              <Text variant="caption">{article.author}</Text>
            </Box>
            <Box>
              <Text fontStyle="italic">Published on:</Text>
              <Text variant="caption">
                {new Date(article.publishedAt).toLocaleDateString()}
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box bg="white" boxShadow="lg" transform="translateY(-170px)" p={6}>
          <Text variant="heading1">{article.title}</Text>
          <Text>
            Source: {article.source.name},{" "}
            <UILink href={article.url} target="_blank">
              {article.url}
            </UILink>
          </Text>
          <Divider my={6} />
          <Text variant="caption" fontStyle="italic">
            {article.description}
          </Text>
          <Text mt={6}>
            {article.content}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            numquam deleniti debitis asperiores provident doloremque explicabo
            voluptas earum quidem quam. Tenetur, nisi sapiente! Ratione rem illo
            esse ipsa saepe quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit numquam deleniti debitis asperiores
            provident doloremque explicabo voluptas earum quidem quam. Tenetur,
            nisi sapiente! Ratione rem illo esse ipsa saepe quod. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugit numquam deleniti
            debitis asperiores provident doloremque explicabo voluptas earum
            quidem quam. Tenetur, nisi sapiente! Ratione rem illo esse ipsa
            saepe quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugit numquam deleniti debitis asperiores provident doloremque
            explicabo voluptas earum quidem quam. Tenetur, nisi sapiente!
            Ratione rem illo esse ipsa saepe quod. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit numquam deleniti debitis
            asperiores provident doloremque explicabo voluptas earum quidem
            quam. Tenetur, nisi sapiente! Ratione rem illo esse ipsa saepe quod.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            numquam deleniti debitis asperiores provident doloremque explicabo
            voluptas earum quidem quam. Tenetur, nisi sapiente! Ratione rem illo
            esse ipsa saepe quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit numquam deleniti debitis asperiores
            provident doloremque explicabo voluptas earum quidem quam. Tenetur,
            nisi sapiente! Ratione rem illo esse ipsa saepe quod.
          </Text>
        </Box>
      </HStack>
    </chakra.main>
  );
};

export default NewsArticlePage;
