$().on('load', async e => {
  const url = new URL(document.location);
  await aim.init({
    app: {},
    pages: {},
    uri: 'https://aliconnect.nl/api/v1.0',
    client_id: 'cac652da-dcdc-455a-a0de-e32bac08ea06',
    auth: {
      redirect_uri: document.location.href,
      uri: 'https://aliconnect.nl/api/v1.0',
      scope: 'openid profile name email',
    },
    dms: {
      uri: 'https://aliconnect.nl/api/v1.0',
    },
  });
});
