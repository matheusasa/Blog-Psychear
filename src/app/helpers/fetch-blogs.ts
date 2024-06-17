import config from "@/config";

const fetchBlog = async (params: any) => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 06a50e0650016f5a72ecc2383ac8502b88bb3f74dc60fbfa688e5edbf407a0bd506d223b5c2b915aa48c6003fdf2a7508469eef778fd444adeb29f97a2e77476afba3d16e5d16c10110f847efd04fe83728c8b2a2246a6b3c75fcc3f47b939a5d7567508647c460f8a3bde93fd997735a70a0c182c0b45745deae58b0290b06d`,
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
