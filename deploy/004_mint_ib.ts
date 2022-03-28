import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {execute, get, read} = deployments;

  const {deployer, multisig} = await getNamedAccounts();

  await execute(
    'IronBankToken',
    { from: deployer },
    'setMinter',
    deployer,
  );

  await execute(
    'IronBankToken',
    { from: deployer },
    'mint',
    deployer, hre.ethers.utils.parseEther('7311366')
  );

};
export default func;
func.tags = ['mint'];
