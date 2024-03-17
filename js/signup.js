$(document).ready(function() {
    $('#nextButton').on('click', function() {
        let userId = $('#userid').val();
        let userPw = $('#userpw').val();
        let userNick = $('#usernick').val();

        // 이메일 형식 검증
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(userId)) {
            alert('유효한 이메일 주소를 입력해주세요.');
            return;
        }

        if (!userId || !userPw || !userNick) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        // sessionStorage에 사용자 정보 저장
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('userPw', userPw);
        sessionStorage.setItem('userNick', userNick);

        // 추가 정보 입력 페이지로 이동
        window.location.href = 'additionalInfo.html';
    });
});