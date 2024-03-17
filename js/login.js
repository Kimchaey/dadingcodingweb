$(document).ready(function() {
    $('#loginButton').on('click', function() {
        login();
    });

    function login() {
        let username = $("#id").val();
        let password = $("#pw").val();
        let validationPassed = true;

        // Reset error states
        $(".input_box").removeClass("error");
        $(".error_message").hide();

        if (username === "") {
            $("#id").closest(".id_box").addClass("error");
            $("#id").siblings(".error_message").show();
            validationPassed = false;
        }

        if (password === "") {
            $("#pw").closest(".pw_box").addClass("error");
            $("#pw").siblings(".error_message").show();
            validationPassed = false;
        }

        if (!validationPassed) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "/api/login",
            data: {
                id_give: username,
                pw_give: password
            },
            success: function(response) {
                if (response['result'] === 'success') {
                    $.cookie('mytoken', response['token'], {path: '/'});
                    alert('로그인이 완료되었습니다.');
                    window.location.href = '/';
                } else {
                    alert(response['msg']);
                }
            },
            error: function(xhr, status, error) {
                alert('로그인 요청 중 문제가 발생했습니다: ' + error);
            }
        });
    }
});
