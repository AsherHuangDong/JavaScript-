async function call() {
  await

  function () {
    console.log('1')
  }()
  await

  function () {
    console.log('2')
  }()
}
call()