---
id: learn-about-token-aidrop
title: Cpollo Airdrops
---

Cpollo will help new projects who wants to do airdrops. Cpollo has normal contract airdrops and also KYC airdrops that allow only verified users to receive the destination funds.

How does it work? Project teams transfer their token funds to the Airdrop contract and then they do deposits for the destination wallets.
 Check the implementation:
 ```
  function deposit(address payee, uint256 amount) public onlyPrimary {
        _preDeposit(payee, amount);
        _deposit(payee, amount);
      
        emit Deposited(payee, amount);
    }
```

In each deposit is emitted an event. Cpollo will use this event to notify users that funds where aidropped to them. Then the user calls the withdraw function to receive the aidrop:

```
  function withdraw() public {
        address sender = msg.sender;
        uint256 payment = _deposits[sender];
        _preWithdraw(sender, payment);
     
      
        _withdraw(sender, payment);
        _deposits[sender] = 0;

        emit Withdrawn(sender, payment);
    }
```

For projects who wants only verified and real users receive airdrops we have the KYC airdrop contract that enables it. Check how we do it:
```
  function _preDeposit(address payee, uint256 amount) internal {
        super._preDeposit(payee, amount);
        require(_user.isUser(payee), "Only KYC users are allowed");
    }
```

With this, Team projects only deposits for verified users in cpollo platform.