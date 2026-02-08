import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    return NextResponse.json({
      response: `I received your message: "${message}". AI integration coming soon!`,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
