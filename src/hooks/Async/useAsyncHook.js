import React from "react";

function useAsyncHook(searchBook) {
    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState("false");
  
    React.useEffect(() => {
      async function fetchBookList() {
        try {
          setLoading("true");
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
          );
  
          const json = await response.json();
          // console.log(json);
          setResult(
            json.items.map(item => {
              console.log(item.volumeInfo.title);
              return item.volumeInfo.title;
            })
          );
        } catch (error) {
          setLoading("null");
        }
      }
  
      if (searchBook !== "") {
        fetchBookList();
      }
    }, [searchBook]);
  
    return [result, loading];
  }
  
  export default useAsyncHook;