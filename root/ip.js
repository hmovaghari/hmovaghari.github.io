// تابعی برای دریافت آدرس IP
function getIP()
{
  const api = 'https://api.ipify.org?format=json';
  var output = "";
  // اگر در Node.js اجرا می‌شود
  if (typeof window === 'undefined')
  {
    const https = require('https');

    https.get(api, (resp) =>
    {
      let data = '';

      resp.on('data', (chunk) =>
      {
        data += chunk;
      });

      resp.on('end', () =>
      {
        output = JSON.parse(data).ip;
        console.log(output);
      });

    }).on("error", (err) =>
    {
      output = "Error: " + err.message;
      console.log(output);
    });
  }
  else
  {
    // اگر در مرورگر اجرا می‌شود
    var item = document.getElementById("ipAddress");
    fetch(api)
      .then(response => response.json())
      .then(data =>
        {
          output = data.ip;
          console.log(output);
          item.textContent = output;
        })
        .catch((error) =>
        {
          output = "Error: " + error.message;
          console.log(output);
          item.textContent = output;
        });
  }
}

// فراخوانی تابع
getIP();
