import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface TSearchInputProps {
  onSearchTextChange: (query: string) => void;
}

const SearchInput = ({ onSearchTextChange }: TSearchInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTextChange(e.target.value);
  };

  return (
    <InputGroup w="450px">
      <InputLeftElement
        pointerEvents="none"
        children={<IoSearchOutline color="gray.300" />}
      />
      <Input placeholder="Search News, Articles" onChange={onChangeHandler} />
    </InputGroup>
  );
};

export default SearchInput;
