const test = () => {
  // 비밀번호 유효성 검사
  let pw1 = document.getElaentById('password1').value;
  let alertPassword1 = document.getElementById('valid__alert__password1');
  let alertPassword2 = document.getElementById('valid__alert__password2');

  if (pw1 == '') return;

  let isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/.test(pw1);

  if (!isValidPassword) {
    alertPassword1.style.display = 'block';
  } else {
    alertPassword1.style.display = 'none';
  }

  // 비밀번호 동일성 검사
  let pw2 = document.getElementById('password2').value;
  if (pw1 !== pw2) {
    alertPassword2.style.display = 'block';
  } else {
    alertPassword2.style.display = 'none';
  }
};
