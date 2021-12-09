import React from "react";
import useAsyncHook  from './useAsyncHook'

function AsyncHooks() {
    const [search, setSearch] = React.useState("");
    const [query, setQuery] = React.useState("");
    const [result, loading] = useAsyncHook(query);
    return (
      <div className="App">
        <h1>Search for Books on any Topic</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            setQuery(search);
          }}
        >
          <label>Search : </label>
          <input type="text" onChange={e => setSearch(e.target.value)} />
          <input type="submit" value="search" />
        </form>
  
        {loading === "false" ? (
          <h1>Search for Books</h1>
        ) : loading === "null" ? (
          <h1>No Book Found</h1>
        ) : (
          result.map(item => {
            return <p>Book Title : {item}</p>;
          })
        )}
      </div>
    );
  }export default AsyncHooks;