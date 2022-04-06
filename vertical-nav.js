const response = await fetch(
  'https://codegen.plasmic.app/api/v1/loader/html/preview/mEcGDPWhynD51SSQ6owQfo/Components?hydrate=1&embedHydrate=1',
  {
    headers: {
      // Your project ID and public API token
      'x-plasmic-api-project-tokens': 'mEcGDPWhynD51SSQ6owQfo:FtAVn6DDkjfCT0wnjrztQ0ykMGhHZVBhfOYZvDh0KxIchTh7BAfUPOp5oQSB5s0gJHgKTA83xkx4aHBReg'
      // You can find your PROJECT token by visiting
      // https://studio.plasmic.app/projects/[mEcGDPWhynD51SSQ6owQfo]/docs/loader#showToken=true
    }
  }
);
const result = await response.json();
document.body.innerHTML = result.html;
