export const fetcher = async <T>(url: string, options: RequestInit): Promise<T> => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  