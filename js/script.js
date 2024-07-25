document.addEventListener('DOMContentLoaded', function() {
    const basicSettings = document.getElementById('basicSettings');
    const centerManagement = document.getElementById('centerManagement');
    const centerList = document.querySelector('.center_listboxcontent');
    const centerItem = document.querySelector('.center_item');
    const buttons = document.querySelectorAll('.menu_btn .btn');
    const menuContainer = document.getElementById('menuContainer');
    const centerListBoxContent = document.querySelectorAll('.center_listboxcontent ul');
    const searchInput = document.getElementById('searchInput'); 
    const searchButton = document.getElementById('searchButton'); 
    const mainContent = document.getElementById('mainContent');
    function showElement(element) {
        element.classList.remove('hidden');
    }

    function hideElement(element) {
        element.classList.add('hidden');
    }
    
    function disableButtons(disabled) {
        buttons.forEach(button => {
            if (button.textContent === '라이센스관리' || button.textContent === '사용료관리') {
                button.disabled = disabled;
            }
        });
    }

    // 초기 설정
    showElement(basicSettings);
    hideElement(centerManagement);
    disableButtons(false);

    
    buttons.forEach(button => {
        // 기본설정 버튼 클릭 시
        if (button.textContent === '기본설정') {
            button.addEventListener('click', function() {
                console.log('기본설정 버튼 클릭됨');
                showElement(basicSettings);
                hideElement(centerManagement);
                disableButtons(false);
            });
        }
        // 센터 관리 버튼 클릭 시
        if (button.textContent === '센터관리') {
            button.addEventListener('click', function() {
                console.log('센터 관리 버튼 클릭됨');
                hideElement(basicSettings);
                showElement(centerManagement);
                centerItem.classList.add('hidden'); // 초기에는 센터 정보 숨기기
                disableButtons(false);
            });
        }
        // 라이센스관리, 사용료관리 버튼 클릭 막기
        if (button.textContent === '라이센스관리' || button.textContent === '사용료관리') {
            button.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }
        // 첫화면 버튼 active 클래스 토글
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active1'));
            this.classList.add('active1');
        });
    });

    // 센터 목록 클릭 시
    centerList.addEventListener('click', function(event) {
        if (event.target && event.target.closest('ul')) {
            centerItem.classList.remove('hidden'); // 센터 정보 보여주기
        }
    });
    
    // 클릭된 ul에 active 클래스 추가
    centerListBoxContent.forEach(ul => {
        ul.addEventListener('click', function() {
            centerListBoxContent.forEach(item => item.classList.remove('active')); 
            this.classList.add('active'); 
        });
    });
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

            if (selectedItem.textContent === '기본설정') {
                showElement(basicSettings);
            } else if (selectedItem.textContent === '센터관리') {
                showElement(centerManagement);
                centerItem.classList.add('hidden'); // 초기에는 센터 정보 숨기기
            }
            
            mainContent.innerHTML = `
                     <div class="container_box">
                            <div class="container_header">
                                <div class="txtbox">
                                    <h3>${selectedItem.textContent}</h3> 
                                    <h4>1070</h4>
                                </div>
                                <div class="menu_btn">  
                                    <button type="button" class="btn active1">기본설정</button>
                                    <button type="button" class="btn">센터관리</button>
                                    <button type="button" class="btn">라이센스관리</button>
                                    <button type="button" class="btn">사용료관리</button>
                                </div>
                            </div>
                            <div class="container_field" id="basicSettings" >
                                <form>
                                    <div class="agency_Info">
                                        <legend> 
                                            <span>대리점 정보</span>
                                             등록일 : ${formattedDate}
                                        </legend>
                                        <button>대리점 삭제</button>
                                    </div>

                                    <p class="agencyTitle">대리점명 <input type="text" placeholder="${selectedItem.textContent}" width="300px"> </input></p>

                                    <div class="agencyOwner">
                                        <div class="addressForm">주소
                                            <p><input type="text" size="4"></p>
                                            <p><input type="text" size="20"></p>
                                            <p><input type="text" size="30"></p>
                                        </div>

                                        <p>담당자명 <input type="text" placeholder="김담당">
                                        </p>

                                        <p>전화번호 <input type="tel" placeholder="010-1234-5678">
                                        </p>

                                        <div class="email">이메일(3개까지)
    
                                            <input type="text" id="user_email" class="align-left"  size="16">
    
                                            <input type="text" id="domainInput" size="16" >
                                            <input type="text" size="16">
                                        </div>
                                        <div class="service" action="#">
                                            <label for="serv">
                                                서비스 중지
                                            </label>
                                            <select name="service_stop" id="serv">
                                                <option value="use_stop">사용중지</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="center_transcription">
                                        <div class="center">
                                            <p>센터설정</p>
                                            <div class="center_checkbox">
                                                <input type="checkbox" id="check" checked>
                                                <label for="check">
                                                    <span>센터 일괄 적용</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="recording_date">
                                            <p>녹취보관일</p>
                                            <div class="recording_date_num">
                                                <input type="number" name="number" placeholder="18" step="0">
                                                <label for="">
                                                    개월
                                                </label>
                                            </div>
                                            
                                        </div>
                                        <div class="pickup_code">
                                            <p>픽업코드</p>
                                            <div class="pickup">
                                                <select name="" id="">
                                                    <option value="">통신사</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="stop_recording">
                                            <p>
                                                녹취중지버튼레이블
                                            </p>
                                            <div class="stop_record_btn">
                                                <input type="text" value="녹음중지" >
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="container_field hidden" id="centerManagement" >
                                <div class="center_detail">
                                    <div class="center_list">
                                        <div class="center_listtitle">
                                            <p>센터목록</p>
                                        </div>
                                        <div class="center_listbox">
                                            <ul class="center_listboxdetail">
                                                <li class="center_listboxheader">
                                                    <ul>
                                                        <li>No.</li>
                                                        <li>센터</li>
                                                        <li> </li>
                                                    </ul>
                                                </li>
                                                <li class="center_listboxcontent">
                                                    <ul>
                                                        <li>9999</li>
                                                        <li>PTMS</li>
                                                        <li> </li>
                                                    </ul>
                                                    <ul>
                                                        <li>9999</li>
                                                        <li>PTMS</li>
                                                        <li> </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="center_item" >
                                        <div class="center_item_info">
                                            <div class="center_item_maintitle">
                                                <p>센터 정보</p>
                                                <button>
                                                    센터 삭제
                                                </button>
                                            </div>
                                            <div class="center_item_maindetail">
                                                <div class="center_name">
                                                    <p>센터명</p>
                                                    <input type="text" placeholder="센터명 센터명 센터명 센터명 센터명 센터명">
                                                </div>
                                                <div class="center_recordRetentionDate">
                                                    <p>녹취보관일</p>
                                                    <div class="recording_date_num">
                                                        <input type="number" name="number" placeholder="18" step="0">
                                                        <label for="">
                                                            개월
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="center_pickupCode">
                                                    <p>픽업코드</p>
                                                    <div class="pickup">
                                                        <select name="" id="">
                                                            <option value="">통신사</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="center_record_stopbutton">
                                                    <p>녹취중지버튼레이블</p>
                                                    <div class="stop_record_btn">
                                                        <input type="text" value="녹음중지" >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="recording_send">
                                            <div class="recording_title">
                                                <p>녹취파일전송</p>
                                            </div>
                                            <div class="recording_detail">
                                                <div class="recording_detail_left">
                                                    <div class="recording_detail_1 ">
                                                        <p>Http URL</p>
                                                        <div class="send_status">
                                                            <select name="" id="">
                                                                <option value="">전송안함</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_2 ftp">
                                                        <p>FTP IP Address</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="128.000.000.000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_3 ftp">
                                                        <p>FTP ID</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="128.000.000.000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_4 ftp">
                                                        <p>FTP PW</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="128.000.000.000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_5 ftp">
                                                        <p>녹취 재생 URL</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="128.000.000.000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_6 ftp">
                                                        <p>통화정보전송URL</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="128.000.000.000" >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="recording_detail_right">
                                                    <div class="recording_detail_1 ftp">
                                                        <p>Http URL</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="irlink.co.kr" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_2 ftp">
                                                        <p>FTP Port</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="8000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_3 ftp">
                                                        <p>FTP Mode</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="8000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_4 ftp">
                                                        <p>FTP 경로</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="8000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_5 ftp">
                                                        <p>녹취 재생 경로</p>
                                                        <div class="ftp_inter">
                                                            <input type="text" value="8000" >
                                                        </div>
                                                    </div>
                                                    <div class="recording_detail_6 ftp">
                                                        <p>통화정보전송URL</p>
                                                        <div class="tell_url">
                                                            <select name="" id="">
                                                                <option value=""></option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="insurance_transfer_info">
                                            <div class="insurance_transfer_title">
                                                <p>보험사 전송정보</p>
                                            </div>
                                            <!-- 흥국생명 -->
                                            <div class="heungkuk">
                                                <div class="heungkuk_left">
                                                    <div class="heungkuk_info_1 infos">
                                                        <p>흥국생명 대리점코드</p>
                                                        <div class="sending_status">
                                                            <select name="" id="">
                                                                <option value="">전송안함</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="heungkuk_info_2 infos">
                                                        <p>흥국생명 FTP IP</p>
                                                        <div class="heungkuk_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="128.000.000.000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="heungkuk_info_3 infos">
                                                        <p>흥국생명 FTP ID</p>
                                                        <div class="heungkuk_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="128.000.000.000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="heungkuk_right">
                                                    <div class="heungkuk_info_1 infos">
                                                        <p>흥국생명 FTP 모드</p>
                                                        <div class="heungkuk_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="irlink.co.kr" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="heungkuk_info_2 infos">
                                                        <p>흥국생명 FTP 포트</p>
                                                        <div class="heungkuk_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="8000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="heungkuk_info_3 infos">
                                                        <p>흥국생명 FTP PW</p>
                                                        <div class="heungkuk_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="8000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 에이스화재 -->
                                            <div class="ace">
                                                <div class="ace_left">
                                                    <div class="ace_info_1 infos">
                                                        <p>에이스화재 대리점코드</p>
                                                        <div class="sending_status">
                                                            <select name="" id="">
                                                                <option value="">전송안함</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="ace_info_2 infos">
                                                        <p>에이스화재 FTP IP</p>
                                                        <div class="ace_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="128.000.000.000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ace_info_3 infos">
                                                        <p>에이스화재 FTP ID</p>
                                                        <div class="ace_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="128.000.000.000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ace_right">
                                                    <div class="ace_info_1 infos">
                                                        <p>에이스화재 FTP 모드</p>
                                                        <div class="ace_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="irlink.co.kr" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ace_info_2 infos">
                                                        <p>에이스화재 FTP 포트</p>
                                                        <div class="ace_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="8000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ace_info_3 infos">
                                                        <p>에이스화재 FTP PW</p>
                                                        <div class="ace_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="8000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 삼성화재 -->
                                            <div class="samsung">
                                                <div class="samsung_left">
                                                    <div class="samsung_info_1 infos">
                                                        <p>삼성화재 센터코드</p>
                                                        <div class="samsung_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="128.000.000.000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="samsunginfo_2 infos">
                                                        <p>삼성화재 녹취전송URL</p>
                                                        <div class="samsung_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="128.000.000.000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="samsung_right">
                                                    <div class="samsung_info_1 infos">
                                                        <p>삼성화재 대리점코드</p>
                                                        <div class="samsung_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="8000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 현대해상 -->
                                             <div class="hyundai">
                                                <div class="hyundai_left">
                                                    <div class="hyundai_info_1 infos">
                                                        <p>현대해상 녹취전송URL</p>
                                                        <div class="hyundai_ftp">
                                                            <div class="ftp_inter">
                                                                <input type="text" value="128.000.000.000" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>
                                        <div class="submit_btn">
                                            <input type="button" value="저장">
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
            `;
            const newButtons = mainContent.querySelectorAll('.btn');
            const contentsMenu = mainContent.querySelectorAll('.menu_btn .btn');
            const basicSettings = document.getElementById('basicSettings');
            const centerManagement = document.getElementById('centerManagement'); 
            const centerItem = document.querySelector('.center_item');
            const centerList = document.querySelector('.center_listboxcontent');
            const centerListBoxContent = document.querySelectorAll('.center_listboxcontent ul');

            // 클릭된 ul에 active 클래스 추가
            centerListBoxContent.forEach(ul => {
                ul.addEventListener('click', function() {
                    centerListBoxContent.forEach(item => item.classList.remove('active')); 
                    this.classList.add('active'); 
                });
            });
            centerList.addEventListener('click', function(event) {
                if (event.target && event.target.closest('ul')) {
                    centerItem.classList.remove('hidden'); // 센터 정보 보여주기
                }
            });
            newButtons.forEach(button => {
                button.addEventListener('click', function() {
                    newButtons.forEach(btn => btn.classList.remove('active1'));
                    this.classList.add('active1');
                });
            });

            contentsMenu.forEach(button => {
                // 기본설정 버튼 클릭 시
                if (button.textContent === '기본설정') {
                    button.addEventListener('click', function() {
                        console.log('기본설정 버튼 클릭됨');
                        basicSettings.classList.remove('hidden');
                        centerManagement.classList.add('hidden');
                        disableButtons(false);
                    });
                }
                // 센터 관리 버튼 클릭 시
                if (button.textContent === '센터관리') {
                    button.addEventListener('click', function() {
                        console.log('센터 관리 버튼 클릭됨');
                        basicSettings.classList.add('hidden');
                        centerManagement.classList.add('hidden');
                        hideElement(basicSettings);
                        showElement(centerManagement);
                        centerItem.classList.add('hidden'); // 초기에는 센터 정보 숨기기
                        disableButtons(false);
                    });
                }
                // 라이센스관리, 사용료관리 버튼 클릭 막기
                if (button.textContent === '라이센스관리' || button.textContent === '사용료관리') {
                    button.addEventListener('click', function(event) {
                        event.preventDefault();
                    });
                }
            });

            if (selectedItem.textContent === '센터관리') {
                console.log('센터 관리 메뉴 클릭됨');
                // 추가적인 작업 예: 특정 클래스 추가
                centerManagement.classList.add('active'); // 예: 활성화된 상태 표시
            }
        }
        
            
        
        
    });

    
});