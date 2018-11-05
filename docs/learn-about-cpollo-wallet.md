---
id: learn-about-cpollo-wallet
title: Cpollo Wallet 
---

Wallet Smart contracts that hold funds with a specific role destination. For instance, the Devs are registered in Cpollo platform, only Cpollo members can add Devs to the public registry and can remove it as well. With this, legit projects can hire verified devs and investors will know that a part of investments rised in ICO's are expended only in development. 

Advanced features in this smart contract will be: only developers can receive funds from the development wallet, only marketers can receive funds from the marketing wallet, only managers can receive funds from the management wallet. Wallet managers manage do the transfers through Cpollo platform, all of these transfers will be monitored in the platform and investors can check when need it.

If a scam results from managing these funds, Cpollo members will freeze the funds first to do investigation, if the scam is confirmed Cpollo will call the killswitch contract and return the funds to the investors.

We guarantee that only the specific roles receive the funds using a lock feature present in all the wallets contracts. For instance, the Dev wallet uses this function to allow only devs receive funds:

``` 
function _preTransfer(address payee, uint256 amount) internal {
        super._preTransfer(payee, amount);
        require(_dev.isDev(payee), "Only Devs allowed to receive funds");
} 
```

When scam is noticed by community or Cpollo, Cpollo members can call the killswitch feature presented in Cpollo Wallet. Every contract that inherits from Cpollo Wallet will have it:
``` 
    function scamAlert() public onlyCpollo {
        _state = State.Scam;
        _transferFundsScam();
        emit ScamAlert(msg.sender);
    }
```
 We will emit an event that will be used by Cpollo app platform to notify all the users and project members. The function `_transferFundsScam()`is implemented in high order smart contracts, with this we enable that token or eth funds can be transfer back.

However, Cpollo not automatically call the killswictch feature, when scam or red alerts are noticed we call first the freeze feature. Then, we do an extensive investigation to confirm if the news are real. We do the freezing using another feature of Cpollo Wallet: 

``` 
 function freeze() public onlyCpollo {
        _state = State.Freeze;
        emit FreezeAlert(msg.sender);
    } 
```
When in Freeze state, the managers can not transfer funds to the specific role.



