import {exec} from 'child_process';

const INSTALLED = 'Installed';
const NOT_INSTALLED = 'Not Installed';

export const getInstallStatus = appId => new Promise(resolve => {
  exec(`reg query hkcu\\software\\valve\\steam\\apps\\${appId} /v Installed`, (error, stdout, stderr) => {
    if (error || stderr) {
      return resolve(NOT_INSTALLED);
    }
    const installStatus = stdout
      .replace(/\r\n/g, '')
      .match(/0x(\d)/)[1];
    return resolve(Boolean(parseInt(installStatus)) ? INSTALLED : NOT_INSTALLED);
  });
});
