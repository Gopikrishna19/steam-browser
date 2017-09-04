import {exec} from 'child_process';

export const INSTALLED = 'play_arrow';
export const NOT_INSTALLED = 'arrow_downward';
export const RETRIEVING = 'hourglass_full';

export const getInstallStatus = appId => new Promise(
  resolve => exec(
    `reg query hkcu\\software\\valve\\steam\\apps\\${appId} /v Installed`,
    (error, stdout, stderr) => {
      if (error || stderr) {
        return resolve(NOT_INSTALLED);
      }
      const installStatus = stdout
        .replace(/\r\n/g, '')
        .match(/0x(\d)/)[1];
      return resolve(Boolean(parseInt(installStatus)) ? INSTALLED : NOT_INSTALLED);
    }
  )
);
