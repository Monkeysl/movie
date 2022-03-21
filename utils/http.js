const get = async (url="") => {
  return await fetch(url)
  .then(response => response.json())
  .then(result => {
    return result.data
  })
  .catch(err => console.log(err))
}

const post = async (url="", formdata) => {
  const formdataKeys = Object.keys(formdata)
  const _formdata = new FormData()
  if(formdataKeys.length) {
    formdataKeys.forEach(i => _formdata.append(i, formdata[i]))
  }
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
    },
    body: _formdata
  })
  .then(response => response.json())
  .then(result => result.data)
  .catch(err => console.log(err))
}

export {
  get,
  post
}