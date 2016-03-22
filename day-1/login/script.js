window.onload = function () {
    document.forms['loginForm'].onsubmit = function () {
        document.getElementById('mask').style.display = 'block';

        document.onclick = function () {
            document.getElementById('mask').style.display = 'none';
        };

        return false;
    };
};
