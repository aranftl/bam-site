var getPlasmicData = async function () {

const query = new URLSearchParams([
  ['hydrate', '1'],
  ['embedHydrate', '1'],
  [
    'componentProps',
    JSON.stringify({
      bamVerticalMenu: {
        defaultopenKeys: 'menu1',
        defaultSelectedKeys:  '1-1'
      }
    })
  ],
  [
    'globalVariants',
    JSON.stringify([
      // Your global variants
      {
        name: 'Theme',
        value: 'Light'
      }
    ])
  ]
]);  
  
var response = await fetch(
  `https://codegen.plasmic.app/api/v1/loader/html/preview/mEcGDPWhynD51SSQ6owQfo/Components?${query}`,
  {
    headers: {
      // Your project ID and public API token
      'x-plasmic-api-project-tokens': 'mEcGDPWhynD51SSQ6owQfo:FtAVn6DDkjfCT0wnjrztQ0ykMGhHZVBhfOYZvDh0KxIchTh7BAfUPOp5oQSB5s0gJHgKTA83xkx4aHBReg'
      // You can find your PROJECT token by visiting
      // https://studio.plasmic.app/projects/[mEcGDPWhynD51SSQ6owQfo]/docs/loader#showToken=true
    }
  }
);
var result = await response.json();
document.getElementById('plasmic-code').innerHTML = result.html;
var script = document.createElement("script");
    script.src = "https://codegen.plasmic.app/static/js/loader-hydrate.js";
    document.body.appendChild(script);
};
getPlasmicData();
