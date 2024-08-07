// app/api/video/route.ts
import { GET as geti } from 'next-video/request-handler';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return geti(request);
}
