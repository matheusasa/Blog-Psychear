import config from "@/config";

const fetchBlog = async (params: any) => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 83fd15bdf6410e425c8cb843609aa534979ffc7ecae9e9777cbe3fabe32c2cf5a87f8e3c7aaa84eac7083cecc020b906993b5ddf0e614396acd21c90800f0519770c4288af416d11558f8680c130007fef2b4b4005b722480baa4dac14af254589167243e8f781983aa696ec159a60f9d8b8954f849db31da654fb3408ab4465`,
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
