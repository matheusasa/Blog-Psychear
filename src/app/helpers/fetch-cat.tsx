import config from "@/config";

const fetchCat = async () => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 8b388ba616d6cd6aedf473a96707003b4e6db9c1440dcb442bfeffc540bcb6d7c856c3e44e19acf757a2e69f673d698d69a946698db579a73e054be441679424a12dbb2878f580adb52bc574902b9d59794feef65722f8896b9b361cbf07203e1b3717f41bae6af0565dd80b34d89ed2a6b49fc0f8d5d7e3b240257395896d91`,
    },
  };
  try {
    const request = await fetch(`${config.api}/api/categorias`, reqOptions);
    if (!request.ok) {
      throw new Error(`Network response was not ok: ${request.statusText}`);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
export default fetchCat;
