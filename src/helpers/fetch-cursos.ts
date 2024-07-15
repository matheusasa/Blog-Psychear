import config from "@/config";

export const fetchcursos = async (params: any) => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 3bec3d3574a0c7a4d3ab1ab5a8bdcb0f733b487d2bcf4d5f3994c54a15ce4cbc26fa7631060c4e3d03cafeeb7f7285c42bf9dfd49935e31d279f01de14b7bf66a992713b1136e20062eec93639047104ac645f80a01431fef19ca71636d160e2b4c78dcf7a2bc5e7cacb8b5219bfd4b40a228404271f58d2d1de6f43b24d718b`,
    },
  };
  try {
    const request = await fetch(
      `${config.api}/api/cursos/${params}?populate=*`,
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

export const allfetchcursos = async () => {
  const reqOptions: RequestInit = {
    headers: {
      Authorization: `Bearer 83fd15bdf6410e425c8cb843609aa534979ffc7ecae9e9777cbe3fabe32c2cf5a87f8e3c7aaa84eac7083cecc020b906993b5ddf0e614396acd21c90800f0519770c4288af416d11558f8680c130007fef2b4b4005b722480baa4dac14af254589167243e8f781983aa696ec159a60f9d8b8954f849db31da654fb3408ab4465`,
    },
  };
  try {
    const request = await fetch(
      `${config.api}/api/cursos`,
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