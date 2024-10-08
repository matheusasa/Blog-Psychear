import config from "@/config";

const fetchAut = async () => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 4e3b6b475e7133af068000e58eef29b69f59e9d73009b91263207343443509305acb85163e216eef544472d5e8f595c3458c5814ef8ce1e18b3e4cf11f2cf4854f566e54a8bcbed0c38d402706efd6ee58234cc2efdb30bb15d735198d2f5a9d71e652eb0beb28524da6ecbf02b2232e1c418406301ec3799a3bd9c00760b689`,
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