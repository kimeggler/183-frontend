const { protocol, hostname, port } = window.location;

const origin = `${protocol}//${hostname}${port ? `:${port}` : ''}`;

const config = {
  protocol,
  hostname,
  port,
  origin,
  authority: 'http://localhost:4000/auth',
};

export default config;
