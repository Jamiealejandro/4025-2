const functionname = async (parameters) => {
 try {
   let response = await fetch('path/goes/here', {
     method: 'POST or GET or DELETE or PUT',
     headers: {

  'Accept': 'application/json',
  'Content-Type': 'application/json'
 },
  body: JSON.stringify(user)
 })
  return await response.json()
 }  catch(err) {
   console.log(err)
  }
}
