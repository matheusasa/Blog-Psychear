import config from "@/config";

const fetchBlog = async (params: any) => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 3aa2394d0cb059e8026de0e0035cb9b87c848f530e71278dcec6f38e506f2b9b5ad2f8216668e7c9f339661d91a3c5612debdf5462749d1d035d9e5a3ceb3956435da1a61df0a21ded4b8efcc642b28ad0872fa3a70c1b5db8e2441a42bc43f2907b82bd8e7f83f64b96608c23e1ef65cc082bb8b7d743873183d854b25b7f92`,
    },
  };
  try {
    const request = await fetch(
      `${config.api}/api/blogs?populate=*&${params}`,
      reqOptions
    );
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
export default fetchBlog;
