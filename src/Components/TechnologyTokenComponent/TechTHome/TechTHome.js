import React from 'react';
import './TechTHome.css';
import automated from '../../../Images/Assets/automated.svg';
import governance from '../../../Images/Assets/governance.svg';
import vault from '../../../Images/Assets/x-vault.svg';

function TechTHome ()
{
  return (
    <>
      <div className='token-container'>
        <div className='container'>
          <div className='token-content-div pb-5'>
            <h1 className='h1 text-center fw-bold w-sm-100 w-75 mx-auto linear-text'>Xend Finance Token</h1>
            <p className='text-center py-3'>Xend Finance Token ($XEND) powers a decentralized savings and multi-level interest generation protocol built on Ethereum. The $XEND Tokens also generate interest for the users as they hold on to the tokens. Xend Finance allows Credit Unions and Individual savings operations on the smart contract.</p>
            <div className='home-btn-group d-flex flex-md-row flex-column justify-content-center align-items-center'>
            </div>
          </div>

          <div className='token-content-div-1'>
            <div className='row'>
              <div className='col-lg-4 col-12 p-3 '>
                <div className='card token-home-div-1 h-100'>
                  <img src={automated} alt="" width={70} />
                  <h3 className='token-home-h3 py-4'>Automated Yield Aggregator</h3>
                  <p className='token-home-p'>The Xend Finance lending protocol aggregator – unlike other DeFi protocols who only list other Layer-1 DeFi protocols – will automatically shift funds across different lending protocols to provide very high yields without any input from the user.</p>
                </div>
              </div>

              <div className='col-lg-4 col-12 p-3'>
                <div className='card token-home-div-1 h-100'>
                  <img src={vault} alt="" width={70} />
                  <h3 className='token-home-h3 py-4'>x-Vault system</h3>
                  <p className='token-home-p'>The x-vault system is a system that implements multiple yield generation strategies that automatically seek out the highest yields available in DeFi. These x-vaults accept your deposit, then the vault system distributes the funds through multiple strategies, which automatically seek out the best yields (inspired by yearn vaults). Supported Blockchains: BSC and Polygon.</p>
                </div>
              </div>

              <div className='col-lg-4 col-12 p-3'>
                <div className='card token-home-div-1 h-100'>
                  <img src={governance} alt="" width={70} />
                  <h3 className='token-home-h3 py-4'>Governance </h3>
                  <p className='token-home-p'>The Xend Finance governance system will determine strategies that are accepted into the vaults and community members who participate in governance earn a part of the processing fees from the vault operations. The Xend Finance governance system will be deployed across blockchains and users can govern on multiple blockchains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechTHome;