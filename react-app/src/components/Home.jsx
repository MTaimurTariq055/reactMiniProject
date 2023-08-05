import React, { useEffect, useState } from "react";
import Pokemon from "./PokemonList";
import { usePokemonContext } from "./PokemonContextProvider";
import ReactPaginate from "react-js-pagination";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

export function Home() {

  const { pokemonData, setPokemonData, loading } = usePokemonContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(pokemonData);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const filtered = pokemonData.filter((poke) =>
      poke.species.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, pokemonData]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TextField
            id="search"
            label="Search Pokemon"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setSearchQuery("")} size="small">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </div>

        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            {currentPageData && <Pokemon currentPageData={currentPageData} />}
            <br />
            <ReactPaginate
              activePage={currentPage}
              itemsCountPerPage={rowsPerPage}
              totalItemsCount={filteredData.length}
              pageRangeDisplayed={6}
              onChange={handleChangePage}
              itemClass="page-item"
              linkClass="page-link"
              innerClass="pagination justify-content-center"
            />
          </>
        )}
      </div>
    </>
  );
}
