$(document).ready(function () {
    $('#completeRegistration').on('click', function () {
        let userId = sessionStorage.getItem('userId');
        let userPw = sessionStorage.getItem('userPw');
        let userNick = sessionStorage.getItem('userNick');

        let school = $('#school').val();
        let age = $('#age').val();
        let gender = $('#gender').val();
        let role = $('#role').val();

        if (!school || !age || !gender || !role) {
            alert('모든 정보를 입력해주세요.');
            return;
        }

        // 서버에 최종 회원가입 정보를 전송
        $.ajax({
            type: "POST",
            url: "/api/finalizeRegistration",
            data: {
                id: userId,
                pw: userPw,
                nickname: userNick,
                school: school,
                age: age,
                gender: gender,
                role: role
            },
            success: function (response) {
                if (response['result'] === 'success') {
                    alert('회원가입이 완료되었습니다.');
                    window.location.href = '/login';
                } else {
                    // 서버에서 에러 메시지를 반환한 경우
                    alert(response['msg']);
                }
            },
            error: function (xhr, status, error) {
                // 요청 처리 중 오류 발생 시
                alert('회원가입 요청 중 오류가 발생했습니다: ' + error);
            }
        });
    }); 
});
