const { protocol, hostname, port } = window.location;

const origin = `${protocol}//${hostname}${port ? `:${port}` : ''}`;

const config = {
  protocol,
  hostname,
  port,
  origin,
  authority: 'https://localhost:4000/authorize',
};

export default config;
