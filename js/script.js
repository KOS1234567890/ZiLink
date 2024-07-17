document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const menuContainer = document.getElementById('menuContainer');
    const buttons = document.querySelectorAll('.menu_btn .btn');
    

    // 검색 기능
    function searchItems() {
        const filter = searchInput.value.toLowerCase();
        const menuItems = menuContainer.getElementsByClassName('menu-item');
        Array.from(menuItems).forEach(function(item) {
            const txtValue = item.textContent || item.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
        
    };
    searchInput.addEventListener('keyup', searchItems);
    searchButton.addEventListener('click', searchItems);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active1'));
            this.classList.add('active1');
        });
    });


    // 메뉴 컨테이너 높이 조정 함수
    function adjustMenuContainerHeight() {
        const windowHeight = window.innerHeight;
        menuContainer.style.height = (windowHeight - 233) + 'px'; 
    }
    // 윈도우 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', adjustMenuContainerHeight);
    // 초기 높이 설정
    adjustMenuContainerHeight();

    // 메뉴 아이템 클릭 이벤트
    menuContainer.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.menu-item')) {
            const selectedItem = e.target;
            Array.from(menuContainer.getElementsByClassName('menu-item')).forEach(function(item) {
                item.classList.remove('active');
            });
            selectedItem.classList.add('active');

            let today = new Date();
            let formattedDate = today.toISOString().slice(0, 10);

            const mainContent = document.getElementById('mainContent');
            mainContent.innerHTML = `
                     <div class="container_box">
                        <div class="container_header">
                            <div class="txtbox">
                                <h3>${selectedItem.textContent}</h3> 
                                <h4>1071</h4>
                            </div>
                            <div class="menu_btn">  
                                <button type="button" class="btn active1">기본설정</button>
                                <button type="button" class="btn">서비스관리</button>
                                <button type="button" class="btn">사용료관리</button>
                            </div>
                        </div>
                        <div class="container_field">
                            <form action="">
                                <legend>등록일 : ${formattedDate}</legend>
                                <p class="agencyTitle">대리점명 <input type="text" placeholder="${selectedItem.textContent}" width="300px"> </input></p>
                                <div class="agencyOwner">
                                    <p>대리점주 <input type="text" placeholder="김점주" width="120px"> </input></p>
                                    <p>전화번호 <input type="tel" placeholder="010-1234-5678"></p>
                                    <div class="addressForm">주소
                                        <p><input type="text" placeholder="도시" size="5"></p>
                                        <p><input type="text" placeholder="동/읍/면"size="20"></p>
                                        <p><input type="text" placeholder="상세주소" size="30"></p>
                                    </div>
                                </div>

                                <div class="manager">
                                    <p>담당자 <input type="text" placeholder="김점주" width="120"> </input></p>
                                    <p>전화번호 <input type="tel" placeholder="010-1234-5678" width="160px"></p>
                                    <div class="email">이메일 
                                        <input type="text" size="16">
                                        <input type="text">
                                        <input type="text">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            `;
            const newButtons = mainContent.querySelectorAll('.btn');
            newButtons.forEach(button => {
                button.addEventListener('click', function() {
                    newButtons.forEach(btn => btn.classList.remove('active1'));
                    this.classList.add('active1');
                });
            });
        }
    });

    
});
// document.documentElement.style.overflow = 'hidden';

/* email
const domainInput = document.getElementById('domainInput');
const domainSelect  = document.getElementById('domainSelect');

domainSelect.addEventListener('change', function() {
    let selectedOption = domainSelect.value;
    if (selectedOption === 'direct') {
        domainInput.value = ''; 
        domainInput.readOnly = false; 
    } else {
        domainInput.value = '';
        domainInput.value += selectedOption; 
        domainInput.readOnly = true; 
    }
});
domainInput.readOnly = true;  */