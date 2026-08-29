const callbackUrl = window.location.href;
const params = new URL(callbackUrl).searchParams;

document.getElementById('callback-url').textContent = callbackUrl;
document.getElementById('code-field').textContent =
  params.get('code') || 'Not present';
document.getElementById('state-field').textContent =
  params.get('state') || 'Not present';
document.getElementById('error-field').textContent =
  params.get('error') || 'Not present';

document.getElementById('copy-button').addEventListener('click', async () => {
  await navigator.clipboard.writeText(callbackUrl);
  document.getElementById('copy-button').textContent = 'Copied';
});
