import GET_ALL_NFT from './ActionsCreators';


export function getAllNFT(payload) {
    return {
        type: GET_ALL_NFT,
        payload
    }
}