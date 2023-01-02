if(window.ethereum) {
    // Possui a metamask
    document.getElementById('metamask').addEventListener('click', async () => {
        try {
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            let account = accounts[0];
            // document.getElementById('login').innerHTML=account
        }
        catch(e) {
    
        }
    })

} else {
    alert("Você não possui a metamask")
}