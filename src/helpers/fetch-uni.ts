import config from "@/config";

export const fetchuni = async (params: any, second:any) => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 4e3b6b475e7133af068000e58eef29b69f59e9d73009b91263207343443509305acb85163e216eef544472d5e8f595c3458c5814ef8ce1e18b3e4cf11f2cf4854f566e54a8bcbed0c38d402706efd6ee58234cc2efdb30bb15d735198d2f5a9d71e652eb0beb28524da6ecbf02b2232e1c418406301ec3799a3bd9c00760b689`,
    },
  };
  try {

    if(!second){
      second=""
    }
    const request = await fetch(
      `${config.api}/api/${params}?populate=*&${second}`,
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
export const fetchunit = async (params: any, second:any) => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer ff870669ded9d1e5823a71378396ccf5e3238a10425f16e440ea2b0565aeb0acfe71493c9e546e6150ac50d2a33d38c4b3d36e8bf4fbba74718889edf67c25dad8fe777ce110a001562ace0eafe8b73f580c452fc345776fdc0dde79c3f1b1fdbb598ab0fd1ef73a989c269e5eebd4726fc411dcd5ba1445dd692e7e5d6fec71`,
    },
  };
  try {
    const queryParams = second ? `?${second}` : "";
    const request = await fetch(
      `${config.api}/api/${params}${queryParams}`,
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