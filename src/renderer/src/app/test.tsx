import dns from 'node:dns/promises';

export default async function Test() {
  const response = await dns.lookup('google.com');

  return <div>hello world {JSON.stringify(response)}</div>;
}
