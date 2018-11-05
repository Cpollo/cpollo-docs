---
id: learn-about-cpollo-wallet
title: Cpollo Wallet Features
---

Smart contracts that holds funds with a specific destination. 

Advanced features in this smart contract will be: only developers can receive funds from the development wallet, only marketers can receive funds from the marketing wallet, only managers can receive funds from the management wallet. If a scam results from managing these funds, Cpollo members will call the killswitch contract and return the funds to the investors.

We garantue that only the specific roles receive the funds using a lock feature present in all the wallets contracts


For instance, the Dev wallet funds use this feature to allow only devs receive funds:

`   function _preTransfer(address payee, uint256 amount) internal {
        super._preTransfer(payee, amount);
        require(_dev.isDev(payee), "Only Devs allowed to receive funds");
    }`

The Devs are registered in Cpollo platform, only Cpollo members can add Devs to the public registry and can remove it as well. With this, legit projects can hire verified devs and investors will know that a part of investments rised in ICO's are expended only in development. 

