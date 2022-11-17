import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '7p8zt90e',
    dataset: 'production',
    apiVersion: 'v1',
    token: 
        'skNdMOWAXVEjYf5COv8xdrQbpGyDDlcnEu11CxzEyTqsZOiU6eqcnvLSEv9uGZkEGlVIqlPrSiD5YbxGMX9WRNeXi7oEBvrSQUbwdg8KEWbW17kjSLsLow58nDLtB1aG5gt4iCWRr6ZQ04BQsog3svdKhKtjCz4F2HjE2Y4xaGKdI5LSGwge',
    useCdn: false,
})