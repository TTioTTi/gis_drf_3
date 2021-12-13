function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}


function send_input() {
    <!-- axios github - Performing a POST request-->
    axios.post('/accounts/login/', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      })

      .then(function (response) {
        // 성공
        console.log(response);

        document.getElementById('alert_box').innerHTML
            = "<div class='btn btn-primary rounded-pill px-5'>로그인이 성공했습니다.</div>";

        setCookie('drf_token', 'Token' + response.data['token']);
      })

      .catch(function (error) {
        // 실패
        console.log(error);

        document.getElementById('alert_box').innerHTML
            = "<div class='btn btn-danger rounded-pill px-5'>로그인이 실패했습니다.</div>";
      });
}
