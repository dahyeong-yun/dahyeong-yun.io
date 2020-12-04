// 초기 실행 시, 시작일의 min 값 설정

let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일



$("#start_date").attr("min", "2020-06-09");

// 초기 로드 시, 시작일의 min 값은 행사 시작일이 되도록 설정

// 시작일이 변경 될 때마다 종료일의 min 값이 시작일이 되도록 설정
// 종료일이 변경 될 때마다 시작일의 max 값이 종료일이 되도록 설정

/**
 * Event
 */
document.getElementById("start_date").onchange = function() {
    var dateControl = document.querySelector('#start_date');
    console.log(dateControl.value);
}

// document.getElementById("start_date").addEventListener("change", myFunction);
// function myFunction(event) {
//     console.log(event);
//     var dateControl = document.querySelector('#start_date');
//     console.log(dateControl.value);

// }

