function send_input() {
    <!-- axios github - Performing a POST request-->
    axios.post('/accounts/create/', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      })
      .then(function (response) {
        // 성공
        console.log(response);

        document.getElementById('alert_box').innerHTML
            = "<div class='btn btn-primary rounded-pill px-5'>가입이 성공했습니다.</div>"
      })
      .catch(function (error) {
        // 실패
        console.log(error);

        document.getElementById('alert_box').innerHTML
            = "<div class='btn btn-danger rounded-pill px-5'>가입이 실패했습니다.</div>"
      });
}