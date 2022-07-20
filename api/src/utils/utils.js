module.exports = {
  parsePrice: (arrNFT) => {
    return arrNFT.map((e) => { return { ...e, price: Number(e.price) } })
  }
}
