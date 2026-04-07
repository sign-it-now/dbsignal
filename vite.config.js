import { defineConfig } from ‘vite’

export default defineConfig({
build: {
outDir: ‘dist’,
rollupOptions: {
input: ‘index.html’,
},
},
optimizeDeps: {
include: [
‘@walletconnect/sign-client’,
‘@reown/appkit’,
‘@hashgraph/hedera-wallet-connect’,
],
},
define: {
global: ‘globalThis’,
},
})
