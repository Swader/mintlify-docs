(function () {
  try {
    console.log('[add-chain] script loaded');
  } catch (_) {}
  const CHAINS = {
    katana: {
      chainId: '0xb67d2', // 747474
      chainName: 'Katana',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrls: ['https://rpc.katana.network/'],
      blockExplorerUrls: ['https://katanascan.com/']
    },
    bokuto: {
      chainId: '0xb405d', // 737373
      chainName: 'Bokuto',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrls: ['https://rpc-bokuto.katanarpc.com/'],
      blockExplorerUrls: ['https://explorer-bokuto.katanarpc.com/']
    },
    tatara: {
      chainId: '0x1f977', // 129399
      chainName: 'Tatara',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrls: ['https://rpc.tatara.katanarpc.com/'],
      blockExplorerUrls: ['https://explorer.tatara.katana.network/']
    }
  };

  async function addOrSwitchChain(key) {
    try { console.log('[add-chain] invoked with key:', key); } catch (_) {}
    try {
      if (window.__addingChain) {
        console.warn('[add-chain] request ignored: another add/switch in progress');
        return;
      }
      window.__addingChain = true;
      const ethereum = window.ethereum;
      try { console.log('[add-chain] window.ethereum present:', !!ethereum); } catch (_) {}
      if (!ethereum || !ethereum.request) {
        try { console.warn('[add-chain] No Ethereum provider found'); } catch (_) {}
        try { alert('No Ethereum provider found. Please install MetaMask.'); } catch (_) {}
        window.__addingChain = false;
        return;
      }
      // Pre-check current chain id
      try {
        const beforeId = await ethereum.request({ method: 'eth_chainId' });
        console.log('[add-chain] current chainId before:', beforeId);
      } catch (e) {
        console.warn('[add-chain] could not read current chain id before:', e);
      }
      const params = CHAINS[key];
      try { console.log('[add-chain] params resolved:', params); } catch (_) {}
      if (!params) {
        try { console.warn('[add-chain] Unknown chain key:', key); } catch (_) {}
        window.__addingChain = false;
        return;
      }
      // If already on the desired chain, no-op
      try {
        const current = await ethereum.request({ method: 'eth_chainId' });
        if (current && typeof current === 'string' && current.toLowerCase() === params.chainId.toLowerCase()) {
          console.log('[add-chain] already on target chain, skipping');
          window.__addingChain = false;
          return;
        }
      } catch (_) {
        // ignore
      }
      // Try switching first
      try {
        try { console.log('[add-chain] trying wallet_switchEthereumChain'); } catch (_) {}
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: params.chainId }]
        });
        try { console.log('[add-chain] switched chain successfully'); } catch (_) {}
        try {
          const afterId = await ethereum.request({ method: 'eth_chainId' });
          console.log('[add-chain] current chainId after switch:', afterId);
        } catch (e) {
          console.warn('[add-chain] could not read chain id after switch:', e);
        }
        return;
      } catch (switchErr) {
        // 4902: Unrecognized chain, proceed to add
        const code = switchErr && (switchErr.code || switchErr?.data?.originalError?.code);
        try { console.warn('[add-chain] switch failed, code:', code, switchErr); } catch (_) {}
        // If not 4902, still attempt add as some wallets return variants
      }

      try { console.log('[add-chain] trying wallet_addEthereumChain'); } catch (_) {}
      let addOk = false;
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [params]
        });
        addOk = true;
        try { console.log('[add-chain] add chain returned success'); } catch (_) {}
      } catch (addErr) {
        // MetaMask sometimes rejects with -32603 even when the chain is added in the background
        try { console.warn('[add-chain] add chain rejected:', addErr); } catch (_) {}
      }

      // Switch after add
      try { console.log('[add-chain] trying switch after add'); } catch (_) {}
      // tiny delay to let wallet register the new network
      try { await new Promise(r => setTimeout(r, 300)); } catch (_) {}
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: params.chainId }]
      });
      try {
        const afterAddSwitchId = await ethereum.request({ method: 'eth_chainId' });
        console.log('[add-chain] chainId after add+switch:', afterAddSwitchId);
      } catch (e) {
        console.warn('[add-chain] could not read chain id after add+switch:', e);
      }
    } catch (err) {
      try { console.error('[add-chain] Failed to add/switch chain', err); } catch (_) {}
        // Avoid intrusive alerts for MetaMask internal state (-32603)
    }
      finally {
        window.__addingChain = false;
      }
  }

  // Expose globally for MDX buttons
  window.addOrSwitchChain = addOrSwitchChain;
  try { console.log('[add-chain] exposed on window:', typeof window.addOrSwitchChain); } catch (_) {}
})();