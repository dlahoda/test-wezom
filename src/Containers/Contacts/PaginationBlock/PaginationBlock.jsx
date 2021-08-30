import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Pagination from "@material-ui/lab/Pagination";

import { ContactsContext } from "../Contacts";

const PAGE_SIZES = [12, 24, 48];

const PaginationBlock = () => {
  const { pagination, setPagination } = React.useContext(ContactsContext);

  if (pagination) {
    const { count, page, pageLimit } = pagination;

    const handlePageChange = (_e, value) => {
      setPagination((oldState) => ({
        ...oldState,
        page: value,
      }));
    };

    const handleLimitChange = (e) => {
      const value = e.target.value;
      setPagination((oldState) => {
        return {
          ...oldState,
          pageLimit: value,
          count: Math.ceil(oldState.total / value),
        };
      });
    };

    return (
      <div className="flex items-center px-2.5 pt-2 pb-6">
        <div className="flex-grow" />
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          className="pr-2"
        />
        <div>
          <FormControl>
            <Select
              value={pageLimit}
              onChange={handleLimitChange}
              disableUnderline={true}
            >
              {PAGE_SIZES.map((value, index) => (
                <MenuItem
                  key={index}
                  value={value}
                >{`${value} per page`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }

  return null;
};

export default PaginationBlock;
