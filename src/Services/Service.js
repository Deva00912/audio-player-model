export const fetchProgramsPagination = async (start = 1, end = 3) => {
  const response = await fetch(
    `${process.env.REACT_APP_baseUrl}programs?page=${start}&limit=${end}`
  );

  return await response.json();
};

export const getTrack = async (trackId) => {
  const response = await fetch(`tracks/${trackId}`);

  return await response.json();
};

export const getProgram = async (programId) => {
  const response = await fetch(
    `${process.env.REACT_APP_baseUrl}programs/${programId}`
  );

  return await response.json();
};
