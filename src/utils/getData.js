const API = "http://localhost:3000/airlines";

const getData = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export default getData;
