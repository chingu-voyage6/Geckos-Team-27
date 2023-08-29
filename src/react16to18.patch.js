// NOTE: Patch-Aug.30,2023: Updates for migrate from react @^ 16.4.0 to react @^ 18.2.0
//   with Node.js version lock >= 18.16.0, Lock to use only YARN.
// by @sujii

const fs = require('fs');

async () => {
  const patchedConfig = await fs.readFileSync('./scripts/webpack.patched.config.js', 'utf-8');
  try {
    await fs.appendFileSync('../node_modules/react-scripts/config/webpack.config.js', patchedConfig, 'utf-8');
  } catch (err) {
    console.log(err);
  }
};