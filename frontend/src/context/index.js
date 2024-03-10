import { config, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React, { ReactNode } from 'react'
import { State, WagmiProvider } from 'wagmi'

const queryClient = new QueryClient()
const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider, "any");
};

if (!projectId) {
  throw new Error('Project ID is not defined')
}

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': 'green',
  }
})

function ContextProvider({
  children,
  initialState
}) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    </Web3ReactProvider>
  )
}

export default ContextProvider