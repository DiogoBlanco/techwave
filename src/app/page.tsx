import { Metadata } from 'next';

export const viewport: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
};

export default function Home() {
  return <main className="container"></main>;
}
