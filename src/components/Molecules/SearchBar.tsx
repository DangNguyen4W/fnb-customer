import Icon from "../Atoms/Icon";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../Atoms/InputGroup";

function SearchBar() {
  return (
    <InputGroup className="bg-ds-cl-bg-base-default text-ds-cl-text-base-sub border-none">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Icon name="Search" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Icon name="Filter" />
      </InputGroupAddon>
    </InputGroup>
  );
}

export default SearchBar;
