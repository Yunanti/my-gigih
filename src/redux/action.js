function searchQuery(keyword) {
  return {
    type: "searchQuery",
    payload: keyword,
  };
}

export { searchQuery };
