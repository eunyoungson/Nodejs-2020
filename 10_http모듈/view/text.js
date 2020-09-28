exports.text = function(text) {
    return `
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>web 기술</title>
</head>
<body>
    <h1>웹 기술</h1>
    <ul>
    ${list}
        
    </ul>
    <hr>
    <p>
        ${text}
    </p>
    <hr>
    <button>추가</button>
    <button>수정</button>
    <button>삭제</button>
</body>
</html>
    `
}