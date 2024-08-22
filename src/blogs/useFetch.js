import { useState, useEffect } from "react";

const abortController = new AbortController();
const signal = abortController.signal;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error("Data is not fetched from the API");
          }
        })
        .then((data) => {
            console.log("Data has come");
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log("Fetch is failed : cleanup code executed");
            }else{
                setLoading(false);
                setError(err);
            }
            console.log("fetch failed : catch executed");
        });
    }, 1000);

    return () => {
      abortController.abort();
      console.log("De redering cleanup component");
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
