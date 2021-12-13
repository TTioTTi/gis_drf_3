
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

        document.cookie = "drf_token = token" + response.data['token'];
      })

      .catch(function (error) {
        // 실패
        console.log(error);

        document.getElementById('alert_box').innerHTML
            = "<div class='btn btn-danger rounded-pill px-5'>로그인이 실패했습니다.</div>";
      });
}
