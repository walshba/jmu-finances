function fails () {
  return new Promise((res, rej)=>{
    setTimeout(rej, 3000)
  })
}
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    fails()
      .then(()=>console.log('then'))
      .catch(()=>console.error('err'))
      .finally(()=>console.info('finally'))
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
