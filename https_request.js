const https = require('https')
const options = {
    hostname: 'google.com',
    port: 443,
    path: '/',
    method: 'GET'
  }
  
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    let body = ''
    res.on('data', chunk => {
      //process.stdout.write(d)
        body += chunk;
    })
    res.on('end', ()=>{
        console.log(body);
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()