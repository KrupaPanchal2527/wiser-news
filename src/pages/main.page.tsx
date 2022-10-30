import {
  chakra,
  HStack,
  VStack,
  Switch,
  Grid,
  GridItem,
  FormControl,
  Box,
  FormLabel,
  Tooltip,
  Button,
  Select,
} from "@chakra-ui/react";
import React from "react";
import ArticleCard from "../components/articleCard";
import ErrorAlert from "../components/errorcard";
import Loader from "../components/loading";
import SearchInput from "../components/searchInput";
import useFetch from "../hooks/useFetch";
import { TEverythingResponse } from "../types";
import { BiSortAlt2 } from "react-icons/bi";
import { countryList } from "../helpers/constants";
import { generateQueryParamsFromObj } from "../helpers";
import NoDataAlert from "../components/noDataFoundAlert";

interface TDataFilters {
  searchQuery: string;
  showTopNews: boolean;
  sortByPopularity: boolean;
  country: string;
}

const MainPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <chakra.main h="full" px={{ base: "4rem", lg: "10rem" }} py={10}>
      {children}
    </chakra.main>
  );
};

const MainPage = () => {
  const [filters, setFilters] = React.useState<TDataFilters>({
    searchQuery: "",
    showTopNews: false,
    sortByPopularity: false,
    country: "",
  });

  const { data, isLoading, error } = useFetch<TEverythingResponse>({
    url: filters.showTopNews ? "top-headlines" : "everything",
    queryParams: generateQueryParamsFromObj({
      q: filters.searchQuery || "tech",
      sortByPopularity: filters.sortByPopularity ? "popularity" : "",
      country: filters.country,
    }),
  });

  const updateFilters = (filter: Partial<TDataFilters>) => {
    setFilters({
      ...filters,
      ...filter,
    });
  };

  //   Top three 3 returned news article will be used for highlights
  const highlights = data?.articles?.slice(0, 3) ?? [];
  const list = data?.articles?.slice(3) ?? [];

  return (
    <MainPageWrapper>
      <VStack spacing={6} alignItems="stretch">
        <HStack alignItems="center" justifyContent="space-between">
          <HStack>
            <SearchInput
              onSearchTextChange={(query) =>
                updateFilters({ searchQuery: query })
              }
            />
            {filters.showTopNews && (
              <>
                <Tooltip label="Sort by Popularity">
                  <Button
                    variant="ghost"
                    leftIcon={<BiSortAlt2 />}
                    onClick={() =>
                      updateFilters({
                        sortByPopularity: !filters.sortByPopularity,
                      })
                    }
                  >
                    Sort
                  </Button>
                </Tooltip>
                <Box w="110px">
                  <Select
                    placeholder="Country"
                    variant="outline"
                    onChange={(e) => updateFilters({ country: e.target.value })}
                  >
                    {countryList.map((country) => (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    ))}
                  </Select>
                </Box>
              </>
            )}
          </HStack>

          <Box w="145px">
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="email-alerts" mb="0">
                Top News?
              </FormLabel>
              <Switch
                isChecked={filters.showTopNews}
                size="lg"
                colorScheme="cyan"
                onChange={(e) =>
                  updateFilters({ country: "", showTopNews: e.target.checked })
                }
              />
            </FormControl>
          </Box>
        </HStack>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorAlert err={error} />
        ) : data?.articles && data?.articles?.length === 0 ? (
          <NoDataAlert />
        ) : (
          <>
            {highlights?.length !== 0 && (
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={4}
              >
                {highlights[0] && (
                  <GridItem rowSpan={2} colSpan={3}>
                    <ArticleCard
                      orientation="vertical"
                      disableHoverAnimation
                      article={highlights[0]}
                    />
                  </GridItem>
                )}
                {highlights[1] && (
                  <GridItem colSpan={3}>
                    <ArticleCard
                      disableHoverAnimation
                      article={highlights[1]}
                    />
                  </GridItem>
                )}
                {highlights[2] && (
                  <GridItem colSpan={3}>
                    <ArticleCard
                      disableHoverAnimation
                      article={highlights[2]}
                    />
                  </GridItem>
                )}
              </Grid>
            )}

            <VStack alignItems="stretch" spacing={6} px={"8rem"}>
              {list?.map((article, articleIndex) => (
                <ArticleCard key={articleIndex} article={article} />
              ))}
            </VStack>
          </>
        )}
      </VStack>
    </MainPageWrapper>
  );
};

export default MainPage;
