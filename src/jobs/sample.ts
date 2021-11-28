const main = async () => {
  console.log('sample job written by typescript')
}

;(async () => {
  await main()
})()

export {}
