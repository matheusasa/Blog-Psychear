import config from "@/config";

const fetchAut = async () => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer ff870669ded9d1e5823a71378396ccf5e3238a10425f16e440ea2b0565aeb0acfe71493c9e546e6150ac50d2a33d38c4b3d36e8bf4fbba74718889edf67c25dad8fe777ce110a001562ace0eafe8b73f580c452fc345776fdc0dde79c3f1b1fdbb598ab0fd1ef73a989c269e5eebd4726fc411dcd5ba1445dd692e7e5d6fec71`,
    },
  };
  try {
    const request = await fetch(
      `${config.api}/api/autores?populate=*`,
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
export default fetchAut;