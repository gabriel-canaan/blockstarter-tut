import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd20a00f5F5e8e9Be041e6A602D0385c021a4ffc3'
);

export default instance;
