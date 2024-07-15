import config from "@/config";

const fetchCat = async () => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 3bec3d3574a0c7a4d3ab1ab5a8bdcb0f733b487d2bcf4d5f3994c54a15ce4cbc26fa7631060c4e3d03cafeeb7f7285c42bf9dfd49935e31d279f01de14b7bf66a992713b1136e20062eec93639047104ac645f80a01431fef19ca71636d160e2b4c78dcf7a2bc5e7cacb8b5219bfd4b40a228404271f58d2d1de6f43b24d718b`,
    },
  };
  try {
    const request = await fetch(
      `${config.api}/api/categoria-blogs`,
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
export default fetchCat;
