import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [

  {
    pid: 0,
    lpSymbol: 'GME',
    lpAddresses: {
      97: '',
      56: '0xA2e62D43B5340E269Cad0A06D4813957BC56cA31',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },  

  {
    pid: 1,
    lpSymbol: 'GME-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x56CFF0753F898414099CC7E9bA337914AA7215d7',
    },
    token: tokens.gme,
    quoteToken: tokens.busd,
    
  },


  {
    pid: 2,
    lpSymbol: 'GME-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x17e38d6A08375E5c7DF86fc3B3cA93B6Ffc0A81E',
    },
    token: tokens.gme,
    quoteToken: tokens.wbnb,
    
  },

  {
    pid: 5,
    lpSymbol: 'GME-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x2E4B12bb5B2d3a7ec35a47515621E98714953F71',
    },
    token: tokens.gme,
    quoteToken: tokens.wbnb,
    
  },

  {
    pid: 6,
    lpSymbol: 'GME-ADA LP',
    lpAddresses: {
      97: '',
      56: '0x61C85Fbb8c5C64f7875bbD8Cde1609BF5a06B99F',
    },
    token: tokens.gme,
    quoteToken: tokens.wbnb,
    
  },

  {
    pid: 7,
    lpSymbol: 'GME-DOT LP',
    lpAddresses: {
      97: '',
      56: '0x31ecC76e40D171bE3E85f8B3c271248F70052fB6',
    },
    token: tokens.gme,
    quoteToken: tokens.wbnb,
    
  },



  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    
  },
  {
    pid: 4,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    
  },
 
  {
    pid: 8,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
    
  },

  {
    pid: 9,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
    
  },

  {
    pid: 10,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
    
  },

  
  
  // caves (should add token address with lptoken address when add pool)
  {
    pid: 11,
    lpSymbol: 'Cake',
     lpAddresses: {
       97: '',
       56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
    
    isTokenOnly: true,
   },

   {
    pid: 14,
    lpSymbol: 'Busd',
     lpAddresses: {
       97: '',
       56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
    
    isTokenOnly: true,
   },

   {
    pid: 15,
    lpSymbol: 'wBNB',
     lpAddresses: {
       97: '',
       56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
    
    isTokenOnly: true,
   },

   {
    pid: 12,
    lpSymbol: 'Watch',
     lpAddresses: {
       97: '',
       56: '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
    },
    token: tokens.watch,
    quoteToken: tokens.busd,
    
    isTokenOnly: true,
   },
   {
    pid: 13,
    lpSymbol: 'Dot',
     lpAddresses: {
       97: '',
       56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    token: tokens.dot,
    quoteToken: tokens.busd,
    
    isTokenOnly: true,
   },
   
  


   
   
]

export default farms
