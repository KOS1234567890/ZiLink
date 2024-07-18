document.addEventListener('DOMContentLoaded', function() {
    const monitoringBox = document.getElementById('monitoringBox');

    const offlineData = [
        { name: "김상담", id: "(상담원ID)", status: "미접속" },
        { name: "김상담", id: "(상담원ID)", status: "미접속" },
        { name: "김상담", id: "(상담원ID)", status: "미접속" },
        { name: "김상담", id: "(상담원ID)", status: "미접속" },
        { name: "김상담", id: "(상담원ID)", status: "미접속" },
        { name: "김상담", id: "(상담원ID)", status: "미접속" },
    ];
    const connectData = [
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화대기" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화대기" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화대기" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화대기" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화대기" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화대기" },
    ];
    const callData = [
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청"},
    ];
    const endData = [
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청종료"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청종료"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청종료"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청종료"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청종료"},
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "통화중",subStatus1:"00:24:16",subStatus2:"감청종료"},
    ];
    const awayData = [
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "자리비움" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "자리비움" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "자리비움" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "자리비움" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "자리비움" },
        { name: "김상담", id: "(상담원ID)", status: "접속중", subStatus: "자리비움" },
    ];
    offlineData.forEach(data => {
        const offlineDiv = document.createElement('div');
        offlineDiv.className = 'offline';
        offlineDiv.innerHTML = `
            <div class="offline_line">
                <div class="off_txt">
                    <p>${data.name}</p>
                    <p>${data.id}</p>
                </div>
                <div class="off_situation">
                    <p>${data.status}</p>
                </div>
            </div>
        `;
        monitoringBox.appendChild(offlineDiv);
    });
    connectData.forEach(data => {
        const connectDiv = document.createElement('div');
        connectDiv.className = 'connect';
        connectDiv.innerHTML = `
            <div class="connect_line">
                <div class="con_txt">
                    <p>${data.name}</p>
                    <p>${data.id}</p>
                </div>
                <div class="con_situation">
                    <p>${data.status}</p>
                </div>
            </div>
            <div class="connect_line_under">
                <p>${data.subStatus}</p>
            </div>
        `;
        monitoringBox.appendChild(connectDiv);
    });
    callData.forEach(data => {
        const callDiv = document.createElement('div');
        callDiv.className = 'connect_call';
        callDiv.innerHTML = `
                <div class="connect_call_line">
                    <div class="call_txt">
                        <p>${data.name}</p>
                        <p>${data.id}</p>
                    </div>
                    <div class="call_situation">
                        <p>${data.status}</p>
                    </div>
                </div>
                <div class="connect_call_under">
                    <div class="call_txt">
                        <p>${data.subStatus}</p>
                        <p>${data.subStatus1}</p>
                    </div>
                    <div class="call_btn">
                        <button>${data.subStatus2}</button>
                    </div>
                </div>
        `;
        monitoringBox.appendChild(callDiv);
    });
    endData.forEach(data => {
        const endDiv = document.createElement('div');
        endDiv.className = 'End_interception';
        endDiv.innerHTML = `
                <div class="End_interception_line">
                    <div class="end_txt">
                        <p>${data.name}</p>
                        <p>${data.id}</p>
                    </div>
                    <div class="end_situation">
                        <p>${data.status}</p>
                    </div>
                </div>
                <div class="End_interception_under">
                    <div class="end_txt">
                        <p>${data.subStatus}</p>
                        <p>${data.subStatus1}</p>
                    </div>
                    <div class="end_btn">
                        <button>${data.subStatus2}</button>
                    </div>
                </div>
        `;
        monitoringBox.appendChild(endDiv);
    });
    awayData.forEach(data => {
        const awayDiv = document.createElement('div');
        awayDiv.className = 'Away';
        awayDiv.innerHTML = `
            <div class="Away_line">
                <div class="away_txt">
                    <p>${data.name}</p>
                    <p>${data.id}</p>
                </div>
                <div class="away_situation">
                    <p>${data.status}</p>
                </div>
            </div>
            <div class="Away_under">
                <div class="away_txt">
                    <p>${data.subStatus}</p>
                </div>
            </div>
        `;
        monitoringBox.appendChild(awayDiv);
    });
});
