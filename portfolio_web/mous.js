// script.js
document.addEventListener('mousemove', function (e) {
    const effectContainer = document.getElementById('effect-container');
    
    // 새로운 원 요소를 생성
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // 원의 위치를 마우스 좌표에 맞춤
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
    
    // 원을 효과 컨테이너에 추가
    effectContainer.appendChild(circle);
    
    // 원이 점점 사라지도록 애니메이션
    setTimeout(() => {
        circle.style.opacity = '0';
        circle.style.transform = 'scale(2)'; // 원의 크기를 키우기
    }, 10); // 작은 지연을 두어 원이 화면에 표시되도록 함
    
    // 애니메이션이 끝난 후 원 제거
    setTimeout(() => {
        effectContainer.removeChild(circle);
    }, 500); // 500ms 후 원 제거 (CSS transition duration과 맞춤)
});

