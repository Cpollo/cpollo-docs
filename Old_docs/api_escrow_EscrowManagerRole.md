---
id: escrow_EscrowManagerRole
title: EscrowManagerRole
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> EscrowManagerRole</h2><p class="base-contracts"><span>is</span> <a href="escrow_BaseEscrow.html">BaseEscrow</a></p><div class="source">Source: <a href="https://github.com/Cpollo/Ethereum/blob/v0.0.1/contracts/escrow/EscrowManagerRole.sol" target="_blank">escrow/EscrowManagerRole.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="escrow_EscrowManagerRole.html#EscrowManagerAdded">EscrowManagerAdded</a></li><li><a href="escrow_EscrowManagerRole.html#EscrowManagerRemoved">EscrowManagerRemoved</a></li><li><a href="escrow_EscrowManagerRole.html#_addEscrowManager">_addEscrowManager</a></li><li><a href="escrow_EscrowManagerRole.html#_preTransfer">_preTransfer</a></li><li><a href="escrow_EscrowManagerRole.html#_removeEscrowManager">_removeEscrowManager</a></li><li><a href="escrow_EscrowManagerRole.html#addEscrowManager">addEscrowManager</a></li><li><a href="escrow_EscrowManagerRole.html#">fallback</a></li><li><a href="escrow_EscrowManagerRole.html#isEscrowManager">isEscrowManager</a></li><li><a href="escrow_EscrowManagerRole.html#onlyEscrowManager">onlyEscrowManager</a></li><li><a href="escrow_EscrowManagerRole.html#renounceEscrowManager">renounceEscrowManager</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="events"><h3>Events</h3><ul><li><div class="item event"><span id="EscrowManagerAdded" class="anchor-marker"></span><h4 class="name">EscrowManagerAdded</h4><div class="body"><code class="signature">event <strong>EscrowManagerAdded</strong><span>(address account) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>account</code> - address</div></dd></dl></div></div></li><li><div class="item event"><span id="EscrowManagerRemoved" class="anchor-marker"></span><h4 class="name">EscrowManagerRemoved</h4><div class="body"><code class="signature">event <strong>EscrowManagerRemoved</strong><span>(address account) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>account</code> - address</div></dd></dl></div></div></li></ul></div><div class="modifiers"><h3>Modifiers</h3><ul><li><div class="item modifier"><span id="onlyEscrowManager" class="anchor-marker"></span><h4 class="name">onlyEscrowManager</h4><div class="body"><code class="signature">modifier <strong>onlyEscrowManager</strong><span>() </span></code><hr/></div></div></li></ul></div><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="_addEscrowManager" class="anchor-marker"></span><h4 class="name">_addEscrowManager</h4><div class="body"><code class="signature">function <strong>_addEscrowManager</strong><span>(address account) </span><span>internal </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>account</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="_preTransfer" class="anchor-marker"></span><h4 class="name">_preTransfer</h4><div class="body"><code class="signature">function <strong>_preTransfer</strong><span>(address payee, uint256 amount) </span><span>internal </span></code><hr/><div class="description"><p>Can be overridden to add pre transfer logic. The overriding function should call super._preTransfer(payed, amount) to ensure the chain of transfer is executed entirely.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>payee</code> - address</div><div><code>amount</code> - uint256</div></dd></dl></div></div></li><li><div class="item function"><span id="_removeEscrowManager" class="anchor-marker"></span><h4 class="name">_removeEscrowManager</h4><div class="body"><code class="signature">function <strong>_removeEscrowManager</strong><span>(address account) </span><span>internal </span></code><hr/><div class="description"><p>Can be overriden. The overriding function should call super._removeEscrowManager(account) to ensure the chain of transfer is executed entirely.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>account</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="addEscrowManager" class="anchor-marker"></span><h4 class="name">addEscrowManager</h4><div class="body"><code class="signature">function <strong>addEscrowManager</strong><span>(address account) </span><span>public </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="escrow_EscrowManagerRole.html#onlyEscrowManager">onlyEscrowManager </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>account</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">fallback</h4><div class="body"><code class="signature">function <strong></strong><span>(address manager) </span><span>public </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>manager</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="isEscrowManager" class="anchor-marker"></span><h4 class="name">isEscrowManager</h4><div class="body"><code class="signature">function <strong>isEscrowManager</strong><span>(address account) </span><span>public </span><span>view </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>account</code> - address</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="renounceEscrowManager" class="anchor-marker"></span><h4 class="name">renounceEscrowManager</h4><div class="body"><code class="signature">function <strong>renounceEscrowManager</strong><span>() </span><span>public </span></code><hr/></div></div></li></ul></div></div></div>