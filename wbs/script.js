

window.addEventListener("load",checkInternetconnection);


function checkInternetconnection(){
    const StatusText = document.getElementById('StatusText');
    const IPaddressText = document.getElementById('IPaddressText');
    const NetworkStrenghtTextt = document.getElementById('NetworkStrenghtText');

    StatusText.textContent = 'Checking....';
    

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{


            IPaddressText.textContent = data.ip;
            StatusText.textContent = 'connected'

            const connection = navigator.connection;
            
            const NetworkStrenght = connection?connection.downlink+'mbps': 'unknown';
            NetworkStrenghtTextt.textContent = NetworkStrenght;

        })
        .catch(()=>{
            StatusText.textContent = 'Disconnected';
            IPaddressText.textContent = '-';
            NetworkStrenghtTextt.textContent = '-';
    

        })



    }else{
        StatusText.textContent = 'Disconnected';
        IPaddressText.textContent = '-';
        NetworkStrenghtTextt.textContent = '-';

    }
}