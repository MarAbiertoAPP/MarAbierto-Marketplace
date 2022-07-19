import nftData from '../../SliderNftData'

export const media = nftData.map((el) => el.img)
export const mediaByIndex = (index) => media[index % media.length]
