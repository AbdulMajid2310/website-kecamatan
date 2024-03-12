// useSearch.js
import { useState } from "react";

const useSearch = (initialData: any[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = initialData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
      setLoading(false);
    }, 1000);
  };

  const isDataAvailable = !loading && filteredData.length > 0;
  return {
    searchTerm,
    setSearchTerm,
    filteredData,
    handleSearch,
    loading,
    isDataAvailable,
  };
};

export default useSearch;
