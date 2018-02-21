import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x13c329175064FeE17a3BBE52d32cBeC159C66D10'
);

export default instance;
