module.exports = {
  "bitbus": 1,
  "name": "gear",
  "from": 591200,
  "v":3,
  "host": {
    "bitbus": "https://bob.bitbus.network"
  },
  "q": {
    "find": {
      "$or": [
      { "tx.h": "0fc4ab362d95ad27443655e70e368fe5526063e3d17f876a4d6e13ca0bc5bb41" },
      {
      "$and": [
      { "out.tape.cell.s": "gear" },
      { "out.tape.cell.s": "0fc4ab362d95ad27443655e70e368fe5526063e3d17f876a4d6e13ca0bc5bb41" } ] }
      ]
    }
  }
}
